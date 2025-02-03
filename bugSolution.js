```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => {
      console.log('Component unmounted');
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    // Only update the count if the component is mounted
    if (mounted) {
      console.log(`Count updated to: ${count}`);
    }
  }, [count, mounted]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```