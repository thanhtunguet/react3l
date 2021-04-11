import type { Subscription } from 'rxjs';
import React from 'react';

export function useEffectSubscription(subscriber: () => Subscription): void {
  React.useEffect(() => {
    const subscription: Subscription = subscriber();

    return function cleanup(): void {
      subscription.unsubscribe();
    };
  }, []);
}
