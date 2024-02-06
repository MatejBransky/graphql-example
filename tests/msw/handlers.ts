import { graphql, HttpResponse } from "msw";
import { GetAppInfoDocument } from "../../src/generated/graphql";

export const handlers = () => {
  const { query } = graphql.link("https://api");

  return [
    query(GetAppInfoDocument, () => {
      return HttpResponse.json({
        data: {
          foobar:
            "this should throw the TS error that it doesn't exist in the expected type",
        },
      });
    }),
  ];
};
