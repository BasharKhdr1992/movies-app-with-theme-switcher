export const combineProviders = (providers) => {
  return providers.reduce(
    (AccumulatedProvider, CurrentProvider) => {
      return ({ children }) => {
        return (
          <AccumulatedProvider>
            <CurrentProvider>{children}</CurrentProvider>
          </AccumulatedProvider>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};
