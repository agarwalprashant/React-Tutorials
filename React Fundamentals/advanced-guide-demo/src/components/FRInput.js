import React from 'react'

// function FRInput() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   )
// }

const FRInput = React.forwardRef((props, ref) => {
	return (
		<div>
      <input type="text" ref={ref} />
		</div>
	)
})

export default FRInput


in this video we are going to learn
00:02
about forwarding refs left forwarding is
00:07
a technique for automatically passing a
00:10
ref through a component to one of its
00:12
children
00:14
this concept is best understood with an
00:17
example so let's dive right into the
00:19
code and then later on go over how it
00:22
works I'm going to start off by creating
00:25
a new file
00:28
fr input yes which stands for forward
00:32
draft input
00:34
within the file I'm going to create a
00:36
functional component using the snippet
00:39
RFC e within the JSX I will add an input
00:43
element next I am going to create
00:46
another file
00:49
if our parent input dot J s so forward
00:54
draft parent input within the file I
00:57
will use the snippet RCE
01:00
to create a class component I will get
01:03
rid of the named export
01:05
and in the JSX i will simply add the FR
01:09
input component
01:13
I will also add a button that says focus
01:17
input
01:18
like an app component I will include the
01:22
fr parent input component
01:26
if you save all the files and take a
01:28
look at the browser you should be able
01:30
to see the input and the button again
01:34
similar to the last video what we want
01:37
to achieve is when we click on the
01:39
button and the parent component the
01:42
input in the child component should
01:44
receive focus however unlike the last
01:49
video where the ref was pointing to the
01:52
class component in this video we will
01:55
use the forwarding ref technique to
01:57
allow the parent component to directly
02:00
reference the native input element now
02:03
we have four simple steps first step
02:07
create a ref and the parent component so
02:11
in F our parent input dot Jess I'm going
02:14
to add our Const which gives us the
02:17
constructor
02:19
and I will add this dot input graph
02:24
is equal to react dot create ref second
02:29
step
02:29
attach the ref to the child component
02:32
using the ref attribute so on FR input
02:36
ref is equal to this dot input graph
02:41
third step we need to forward this ref
02:45
to the input element in the child
02:48
component and ref falling can be
02:51
achieved using the forward draft method
02:53
from the react library
02:55
so in FR input guess which is our child
02:58
component we are going to modify how we
03:01
create the functional component i will
03:04
comment out the existing code and show
03:08
you the new way to define it first i am
03:12
going to simply replace the traditional
03:14
function with an arrow function
03:17
Const F our input is going to be equal
03:20
to an arrow function
03:26
you can see that we have not changed any
03:28
functionality we have simply rewritten
03:31
the functional component using arrow
03:34
functions to forward RF we will use the
03:38
react dot forward ref method the method
03:42
is going to be assigned to the constant
03:46
react dot forward ref the forward ref
03:51
method takes in a component as its
03:53
parameter since we already have the
03:57
functional component I will simply cut
03:59
the error function and paste it inside
04:01
the parentheses
04:09
so the error function is passed as a
04:13
parameter to the forward draft method
04:16
and we know that every functional
04:18
component receives props as its
04:21
parameter but let me now tell you when a
04:25
component is passed as a parameter to
04:27
the create ref method it receives the
04:30
ref attribute as its second parameter we
04:35
can use this rough parameter and pass it
04:38
as a value to the ref attribute on the
04:41
native input element so on the input
04:44
element ref attribute and assign the
04:48
value of the ref parameter
04:51
this ref parameter will point to the
04:54
value of the ref attribute from the
04:57
parent component or in other words the
05:01
ref is being forwarded from the parent
05:04
component to the native input element so
05:09
for our final step back in F our parent
05:12
input Dodge's we can define the click
05:15
handler button on click is equal to this
05:20
dot click handler
05:23
which we can define after the
05:25
constructor so click handler is going to
05:28
be equal to an arrow function and within
05:31
the body this dot input ref dot current
05:34
dot focus
05:38
because we are using forward left
05:40
technique ref dot current points to the
05:43
native input element and not the fr
05:46
input component instance if we save all
05:49
the files and go back to the browser
05:53
click on the button you can see that the
05:56
input element receives the focus so let
06:00
me quickly go over the code one last
06:02
time the parent component creates a ref
06:06
and then attaches it to the child
06:09
component instance the child component
06:12
sees that ref and tells the parent hey I
06:16
am NOT the guy you're looking for you
06:19
want the native input element right let
06:22
me directly introduce him to you so the
06:25
child component receives the ref from
06:28
the parent component and attaches it to
06:31
the native input element now the parent
06:35
component can directly access this input
06:38
element using this dot reference
06:41
variable dot current the child element
06:45
is basically forwarding this reference
06:50
now ref forwarding is something you are
06:53
rarely going to use in your application
06:57
this might come in handy when you are
06:59
working with some libraries or when
07:02
you're dealing with higher-order
07:03
components but it's definitely a good
07:07
idea to be aware of the different
07:09
concepts in react and hence I wanted to
07:12
create a video on this topic but this is
07:15
pretty much the content I have on the
07:18
concept of rest and react thank you guys
07:22
for watching don't first video
