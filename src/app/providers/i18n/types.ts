export type Translations = {
  [key: string]:
    | string
    | {
        [key: string]:
          | string
          | {
              [key: string]: string;
            }
          | {
              [key: number]:
                | string
                | {
                    [key: string]: string;
                  };
            };
      };
};
