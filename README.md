# React useEffect: State Update After Unmount
This example demonstrates a common error in React's `useEffect` hook: attempting to update state after the component has unmounted. This can lead to errors or unexpected behavior.  The provided solution shows how to prevent this issue.

## Bug:
The `useEffect` hook's cleanup function attempts to update the state (`setCount`) even after the component has been unmounted.  This is because the state update is asynchronous. 

## Solution:
The solution introduces a `mounted` state variable to prevent state updates after unmounting.  The `useEffect` cleanup function now sets `mounted` to `false`, and the state update function conditionally updates only if `mounted` is `true`.