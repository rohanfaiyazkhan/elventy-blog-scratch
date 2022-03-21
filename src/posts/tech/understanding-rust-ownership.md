---
layout: 'blog'
title: 'Understanding Rust's Ownership Model'
date: 2022-03-21
author: 'Rohan Faiyaz Khan'
tags: ['rust', 'ownership']
excerpt: ''
draft: true
---

_Rust_ has become a popular programming language for developers looking to write highly performant or low system level code. In a StackOverflow survey [^poplang], _Rust_ was voted the most "loved language" by users of the platform.

So why is Rust used? What advantages does it offer over other languages?

The primary selling point of Rust is that it is guaranteed to be memory-safe without requiring a garbage collector. Memory safety is defined as (1) an entity will never reference a memory outside of the allocated address space for that memory, (2) the program never executes instructions outside of the code area used by the compiler for the address space [^memsafety].

Traditionally the solution to memory safety has been garbage collection such as in languages such as Java, Javascript, Python, C# etc. A garbage collector automatically assigns memory to objects when they are created, and automatically clears unused memory when the object is no longer needed. However this extra utility comes at the cost of a runtime overhead. This is insignificant for most application level programs such as mobile apps and websites. However, lower system level programs, high performance apps such as games and video editing and embedded machine software, the cost of garbage collection can become too much to bear and more fine-tuned control of memory is desirable. Garbage collection also does not deal with concurrency. "Safe" languages that deal with concurrency such as Java do not offer any guarantees against data races. Hence managing memory in concurrent modes becomes once again the programmers' responsibility.

While this may call for programmers using systems level languages to become more proficient at memory management, this is not an easy task when dealing with massive codebases with a large team. Memory safety has to be guaranteed through stringent code review, and even so human errors can always creep in. According to Microsoft, 70% of its security issues are memory safety violations [^microsoft]. It is much more preferrable to offload the complexities of memory management to the language while the programmers can focus on the logic of the application.

This is where Rust's ownership model comes in. Through strict rules governing the access to memory, Rust is able to guarantee memory safety at _compile time_ thus removing the need for a runtime garbage collector. At the same time, this ownership model protects against data races during concurrent processes. Let's look at how it works.

Memory in Rust is of two types - stack and heap. This model is shared among many programming languages, but Rust requires the user to be more involved in understand how each works. A value is stored on the stack in the order encountered in the program, and removed in the opposite order when the said value is no longer in scope. Data on the stack must have a known fixed size and be immutable. For example, integers, floats and string literals get stored on the stack.

```rust
fn main() {
    let x: u32 = 5;
    let y: f32 = 4.3;
    let z: &str = 'literal'

    println!("{}, {}, {}", x, y, z)
    // x, y and z are no longer accessed after this line
    // this is said to be the end of the lifetime of the variables
}
```

The example above indicates the point where the variables `x`, `y` and `z` are no longer accessed. In Rust, this is referred to as the end of the variable's lifetime and the compiler automatically calls `drop()` to remove the values from the stack. The variable names are also referred to as owners of the values.

[^poplang]: StackOverflow, "Most Loved, Dreaded and Wanted Languages: 2020 Survey" Retrieved 21 March 2022 from https://insights.stackoverflow.com/survey/2020?utm_source=thenewstack&utm_medium=website&utm_campaign=platform#technology-most-loved-dreaded-and-wanted-languages-loved
[^memsafety]: D. Dhurjati, S. Kowshik, V. Adve and C. Lattner, "Memory safety without runtime checks or garbage collection," in Proceedings of the 2003 ACM SIGPLAN conference on Language, compiler, and tool for embedded systems, New York, NY, USA, 2003.
[^microsoft]: G. Thomas, "A proactive approach to more secure code," July 2019. Retrieved 8 March 2022 from https://msrc-blog.microsoft.com/2019/07/16/a-proactive-approach-to-more-secure-code/.
