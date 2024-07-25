export type WbaPrereq = {
  $schema: "http://json-schema.org/draft-07/schema#";
  title: "Generated schema for Root";
  type: "object";
  properties: {
    address: {
      type: "string";
    };
    metadata: {
      type: "object";
      properties: {
        name: {
          type: "string";
        };
        version: {
          type: "string";
        };
        spec: {
          type: "string";
        };
        description: {
          type: "string";
        };
      };
      required: ["name", "version", "spec", "description"];
    };
    instructions: {
      type: "array";
      items: {
        type: "object";
        properties: {
          name: {
            type: "string";
          };
          discriminator: {
            type: "array";
            items: {
              type: "number";
            };
          };
          accounts: {
            type: "array";
            items: {
              type: "object";
              properties: {
                name: {
                  type: "string";
                };
                writable: {
                  type: "boolean";
                };
                signer: {
                  type: "boolean";
                };
                pda: {
                  type: "object";
                  properties: {
                    seeds: {
                      type: "array";
                      items: {
                        type: "object";
                        properties: {
                          kind: {
                            type: "string";
                          };
                          value: {
                            type: "array";
                            items: {
                              type: "number";
                            };
                          };
                          path: {
                            type: "string";
                          };
                        };
                        required: ["kind"];
                      };
                    };
                  };
                  required: ["seeds"];
                };
                address: {
                  type: "string";
                };
              };
              required: ["name"];
            };
          };
          args: {
            type: "array";
            items: {
              type: "object";
              properties: {
                name: {
                  type: "string";
                };
                type: {
                  type: "string";
                };
              };
              required: ["name", "type"];
            };
          };
        };
        required: ["name", "discriminator", "accounts", "args"];
      };
    };
    accounts: {
      type: "array";
      items: {
        type: "object";
        properties: {
          name: {
            type: "string";
          };
          discriminator: {
            type: "array";
            items: {
              type: "number";
            };
          };
        };
        required: ["name", "discriminator"];
      };
    };
    errors: {
      type: "array";
      items: {
        type: "object";
        properties: {
          code: {
            type: "number";
          };
          name: {
            type: "string";
          };
          msg: {
            type: "string";
          };
        };
        required: ["code", "name", "msg"];
      };
    };
    types: {
      type: "array";
      items: {
        type: "object";
        properties: {
          name: {
            type: "string";
          };
          type: {
            type: "object";
            properties: {
              kind: {
                type: "string";
              };
              fields: {
                type: "array";
                items: {
                  type: "object";
                  properties: {
                    name: {
                      type: "string";
                    };
                    type: {
                      type: "string";
                    };
                  };
                  required: ["name", "type"];
                };
              };
            };
            required: ["kind", "fields"];
          };
        };
        required: ["name", "type"];
      };
    };
  };
  required: ["address", "metadata", "instructions", "accounts", "errors", "types"];
};


export const IDL: WbaPrereq = {
  address: "WBAQSygkwMox2VuWKU133NxFrpDZUBdvSBeaBEue2Jq",
  metadata: {
    name: "wba_prereq",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "complete",
      discriminator: [0, 77, 224, 147, 136, 25, 88, 76],
      accounts: [
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "prereq",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [112, 114, 101, 114, 101, 113],
              },
              {
                kind: "account",
                path: "signer",
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "github",
          type: "bytes",
        },
      ],
    },
    {
      name: "update",
      discriminator: [219, 200, 88, 176, 158, 63, 253, 127],
      accounts: [
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "prereq",
          writable: true,
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "github",
          type: "bytes",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "Q2Prereq2024",
      discriminator: [210, 203, 168, 103, 251, 233, 204, 6],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidGithubAccount",
      msg: "Invalid Github account",
    },
  ],
  types: [
    {
      name: "Q2Prereq2024",
      type: {
        kind: "struct",
        fields: [
          {
            name: "github",
            type: "bytes",
          },
          {
            name: "key",
            type: "pubkey",
          },
        ],
      },
    },
  ],
};
