const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

// 径向布局的简化 mock 数据
export const mockNodes = {
  // 中心节点
  "center": {
    id: "center",
    name: "Center Node",
    nodeType: "centerNode",
    width: 120,
    height: 60,
    isCenter: true  // 标记为中心节点
  },
  // 第一层：围绕中心的节点
  "node-1": {
    id: "node-1",
    name: "Service A",
    nodeType: "serviceNode",
    width: 100,
    height: 50
  },
  "node-2": {
    id: "node-2",
    name: "Service B",
    nodeType: "serviceNode",
    width: 100,
    height: 50
  },
  "node-3": {
    id: "node-3",
    name: "Service C",
    nodeType: "serviceNode",
    width: 100,
    height: 50
  },
  "node-4": {
    id: "node-4",
    name: "Service D",
    nodeType: "serviceNode",
    width: 100,
    height: 50
  },
  "node-5": {
    id: "node-5",
    name: "Service E",
    nodeType: "serviceNode",
    width: 100,
    height: 50
  },
  "node-6": {
    id: "node-6",
    name: "Service F",
    nodeType: "serviceNode",
    width: 100,
    height: 50
  },
  "node-7": {
    id: "node-7",
    name: "Service G",
    nodeType: "serviceNode",
    width: 100,
    height: 50
  },
  "node-8": {
    id: "node-8",
    name: "Service H",
    nodeType: "serviceNode",
    width: 100,
    height: 50
  }
};

export const mockEdges = [
  // 所有节点都连接到中心节点
  {
    pItem: {
      start: { id: "center" },
      end: { id: "node-1" }
    }
  },
  {
    pItem: {
      start: { id: "center" },
      end: { id: "node-2" }
    }
  },
  {
    pItem: {
      start: { id: "center" },
      end: { id: "node-3" }
    }
  },
  {
    pItem: {
      start: { id: "center" },
      end: { id: "node-4" }
    }
  },
  {
    pItem: {
      start: { id: "center" },
      end: { id: "node-5" }
    }
  },
  {
    pItem: {
      start: { id: "center" },
      end: { id: "node-6" }
    }
  },
  {
    pItem: {
      start: { id: "center" },
      end: { id: "node-7" }
    }
  },
  {
    pItem: {
      start: { id: "center" },
      end: { id: "node-8" }
    }
  }
];

// 保留原始复杂数据作为备份
export const mockNodesOld = {
  "5efba79f-a52c-47a2-a0ce-e9bd94c45952": {
    id: "5efba79f-a52c-47a2-a0ce-e9bd94c45952",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "startNode",
    name: "start",
    height: 34,
    edges: [
      {
        target_node_id: "fc84dd7b-f207-4770-8e3d-7058bbc81951"
      }
    ],
    width: 85,
    processedPItems: [
      {
        transition: {
          event: "",
          id: "5efba79f-a52c-47a2-a0ce-e9bd94c45952-START-EDGE",
          nodeId: "fc84dd7b-f207-4770-8e3d-7058bbc81951",
          transitionType: "GO_TO"
        },
        processingItemsParentKey: "startTransition"
      }
    ],
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    blockHeight: 46,
    messageHeight: 0,
    x: 0,
    y: 0
  },
  "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8": {
    id: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "recognitionNode2",
    name: "COFFEE_POPULARITY",
    messagePromptAssets: {
      message: {
        id: "9081107e-2a04-49a2-8add-2ead79d458e0",
        name: "what_type_of_coffee_would_you_l-copy_1657825470369",
        prompts: [
          {
            payload: {
              displayText: "What kind of coffee person you are?",
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "d44af763-b922-468b-9705-dc6ef34f22e0",
            lastModified: "2022-12-09T08:12:46.642Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2022-12-09T08:12:46.640Z"
      },
      promptText: "What kind of coffee person you are?",
      promptTags: []
    },
    edges: [],
    processedPItems: [
      {
        transition: {
          id: "664f321f-9df0-4c2a-abe5-57b501919b5c",
          transitionType: "GO_TO",
          eventId: "",
          label: "Morning",
          eventLog: ""
        },
        id: "3175c6d5-f67e-4795-8bac-9e4848b07ed0",
        note: "",
        channelColor: null,
        channelId: "d44af763-b922-468b-9705-dc6ef34f22e0",
        type: "actionConfig",
        processingItemsParentId: "67f25e6c-0162-4d12-9baf-f1bada69f81d",
        processingItemsParentKey: "processingItemsId"
      },
      {
        transition: {
          id: "b8f1dd73-e314-4387-94a7-f6af852ebc91",
          transitionType: "GO_TO",
          eventId: "",
          label: "Default",
          eventLog: ""
        },
        id: "bc8cd0aa-86b1-4e26-86f3-5f755f2ed89a",
        note: "",
        channelColor: null,
        channelId: "d44af763-b922-468b-9705-dc6ef34f22e0",
        processingItemsParentId: "f20ef3ed-b719-406e-a812-484b6ddac782",
        processingItemsParentKey: "processingItemsId"
      }
    ],
    messageHeight: 83,
    height: 185,
    blockHeight: 129,
    hasParent: true,
    x: 540,
    y: 983,
    width: 195
  },
  "515dfcd0-8d43-4aef-9519-3ebc3312ef71": {
    id: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "recognitionNode2",
    name: "COFFEE_SIZE",
    messagePromptAssets: {
      message: {
        id: "bd2f07f8-dc46-4c30-9ae8-5773e363f528",
        name: "what_size_coffee_would_you_like?",
        prompts: [
          {
            payload: {
              displayText: "What size coffee would you like?",
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "d44af763-b922-468b-9705-dc6ef34f22e0",
            lastModified: "2022-12-09T08:12:47.167Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2022-12-09T08:12:47.165Z"
      },
      promptText: "What size coffee would you like?",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "d10ec4d2-a835-4cda-b41f-c70ea2d0210e",
          transitionType: "GO_TO",
          eventId: "",
          label: "GoTo",
          eventLog: "",
          nodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
        },
        id: "07cb709f-bf99-435c-9024-402addb807a3",
        note: "",
        channelColor: null,
        channelId: "d44af763-b922-468b-9705-dc6ef34f22e0",
        processingItemsParentId: "9e2bea8a-1d3d-4eed-8970-6960bdcf7055",
        processingItemsParentKey: "processingItemsId"
      }
    ],
    messageHeight: 83,
    height: 157,
    blockHeight: 129,
    hasParent: true,
    x: 0,
    y: 983,
    width: 195
  },
  "b75b5392-af2d-48ad-b5ee-0f85c0cfab35": {
    id: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "recognitionNode2",
    name: "COFFEE_TYPE",
    messagePromptAssets: {
      message: {
        id: "044a25a5-9a0b-4d5c-8271-e571a721bb5d",
        name: "what_type_of_coffee_would_you_like?",
        prompts: [
          {
            payload: {
              displayText: "What type of coffee would you like?",
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "d44af763-b922-468b-9705-dc6ef34f22e0",
            lastModified: "2022-12-09T08:12:47.190Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2022-12-09T08:12:47.188Z"
      },
      promptText: "What type of coffee would you like?",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "fe027626-e22f-428f-a2f9-b79b7b3729ad",
          transitionType: "GO_TO",
          eventId: "",
          label: "GoTo",
          eventLog: "",
          nodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
        },
        id: "c53e0b55-7dee-4f0c-982e-1ac2dbd509af",
        note: "",
        channelColor: null,
        channelId: "d44af763-b922-468b-9705-dc6ef34f22e0",
        processingItemsParentId: "6bf429f4-e240-4512-98f7-4f4c8d47823c",
        processingItemsParentKey: "processingItemsId"
      }
    ],
    messageHeight: 83,
    height: 157,
    blockHeight: 129,
    hasParent: true,
    x: 270,
    y: 983,
    width: 195
  },
  "c3d33dad-d727-4e89-be5d-d16e7a0352c0": {
    id: "c3d33dad-d727-4e89-be5d-d16e7a0352c0",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "externalactionNode",
    name: "End dialog",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [],
    processedPItems: [],
    messageHeight: 0,
    height: 46,
    blockHeight: 46,
    actionType: "END",
    hasParent: true,
    x: 810,
    y: 1243,
    width: 195
  },
  "881ecd1c-782f-42c1-b2f9-1a0674537931": {
    id: "881ecd1c-782f-42c1-b2f9-1a0674537931",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "recognitionNode2",
    name: "Get Intent",
    messagePromptAssets: {
      message: {
        id: "452c2375-2b8f-4476-bb46-7eb682ada4e7",
        name: "what_can_i_get_you_today?",
        prompts: [
          {
            payload: {
              displayText: "What can I get you today?",
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "d44af763-b922-468b-9705-dc6ef34f22e0",
            lastModified: "2022-12-09T08:12:46.701Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2022-12-09T08:12:46.695Z"
      },
      promptText: "What can I get you today?",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "5dfa1418-0836-42ab-8151-3a455e72090e"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "8179cf2f-6598-4f86-8c50-35a954c6342c",
          transitionType: "GO_TO",
          eventId: "",
          label: "GoTo: Intent Mapper",
          eventLog: "",
          nodeId: "5dfa1418-0836-42ab-8151-3a455e72090e"
        },
        id: "d5727a41-2f85-49db-b95e-f033fcef7247",
        note: "",
        channelColor: null,
        channelId: "d44af763-b922-468b-9705-dc6ef34f22e0",
        processingItemsParentId: "3237d3a8-83e4-49bf-b9ff-cd68a6fe6bea",
        processingItemsParentKey: "processingItemsId"
      }
    ],
    messageHeight: 83,
    height: 157,
    blockHeight: 129,
    hasParent: true,
    x: 0,
    y: 341,
    width: 195
  },
  "ed6c4115-2a7e-485a-9c88-b06c6af0281e": {
    id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "controllerNode",
    hasParent: true,
    name: "Get Order Details",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "515dfcd0-8d43-4aef-9519-3ebc3312ef71"
      },
      {
        target_node_id: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35"
      },
      {
        target_node_id: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8"
      },
      {
        target_node_id: "cfee3c5d-4f8c-499f-9234-bdc258c56efe"
      }
    ],
    processedPItems: [
      {
        id: "fd7a92bf-e993-4436-83fd-86d6d3224717",
        actionParams: {
          sourceNodeType: "controllerNode"
        },
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                type: {
                  attrs: [],
                  componentStyle: {
                    rules: [
                      "flex:1;vertical-align:super;overflow:hidden;text-overflow:ellipsis;"
                    ],
                    staticRulesId: "",
                    isStatic: false,
                    componentId: "node-utils__PortContentLabel-sc-1buktr3-1",
                    baseHash: -412407955
                  },
                  displayName: "node-utils__PortContentLabel",
                  foldedComponentIds: [],
                  styledComponentId:
                    "node-utils__PortContentLabel-sc-1buktr3-1",
                  target: "div"
                },
                key: null,
                ref: null,
                props: {
                  children: "Intent Switch"
                },
                _owner: null,
                _store: {}
              },
              {
                type: {
                  attrs: [],
                  componentStyle: {
                    rules: ["float:right"],
                    staticRulesId: "",
                    isStatic: false,
                    componentId:
                      "node-utils___StyledTransitionIcon2-sc-1buktr3-12",
                    baseHash: 1255610387,
                    baseStyle: {
                      rules: ["float:right;"],
                      staticRulesId: "",
                      isStatic: false,
                      componentId: "node-utils__TransitionIcon-sc-1buktr3-2",
                      baseHash: -515599044
                    }
                  },
                  displayName: "node-utils___StyledTransitionIcon2",
                  foldedComponentIds: [
                    "node-utils__TransitionIcon-sc-1buktr3-2"
                  ],
                  styledComponentId:
                    "node-utils___StyledTransitionIcon2-sc-1buktr3-12"
                },
                key: null,
                ref: null,
                props: {
                  fontName: "IntentMapperNode"
                },
                _owner: null,
                _store: {}
              }
            ]
          },
          _owner: null,
          _store: {}
        },
        disableLabelEdit: true,
        transition: {
          id: "fd7a92bf-e993-4436-83fd-86d6d3224717",
          transitionType: "RETURN_TO_INTENT_MAPPER",
          eventId: "",
          label: "Intent Switch",
          eventLog: ""
        },
        processingItemsParentId: "fd7a92bf-e993-4436-83fd-86d6d3224717",
        processingItemsParentKey: "intentSwitchTransition",
        type: "intentSwitch"
      },
      {
        transition: {
          id: "aab864da-f52a-4eba-a00a-035c905d761e",
          transitionType: "GO_TO",
          eventId: "",
          label: "Complete",
          eventLog: "",
          nodeId: "cfee3c5d-4f8c-499f-9234-bdc258c56efe"
        },
        id: "d9462c5b-4c67-48f5-8fd6-acf39733408f",
        note: "",
        channelId: "d44af763-b922-468b-9705-dc6ef34f22e0",
        processingItemsParentId: "e27f6940-577e-404f-a0ca-a763b2d7c006",
        processingItemsParentKey: "finalTransitionId",
        content: {
          type: {
            attrs: [],
            componentStyle: {
              rules: [
                "flex:1;vertical-align:super;overflow:hidden;text-overflow:ellipsis;"
              ],
              staticRulesId: "",
              isStatic: false,
              componentId: "node-utils__PortContentLabel-sc-1buktr3-1",
              baseHash: -412407955
            },
            displayName: "node-utils__PortContentLabel",
            foldedComponentIds: [],
            styledComponentId: "node-utils__PortContentLabel-sc-1buktr3-1",
            target: "div"
          },
          key: null,
          ref: null,
          props: {
            children: "Complete"
          },
          _owner: null,
          _store: {}
        },
        node: {
          id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
          parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
          controllerNode: {
            name: "Get Order Details",
            description: "",
            initialTransition: {
              id: "c9127986-68f2-4e85-a5ab-2a572fa0ae4f",
              channelProcessingItemsMap: {
                "d44af763-b922-468b-9705-dc6ef34f22e0": {
                  processingItems: []
                }
              },
              lastModified: "2022-12-09T08:12:47.715Z",
              parentNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
            },
            finalTransition: {
              id: "e27f6940-577e-404f-a0ca-a763b2d7c006",
              channelProcessingItemsMap: {
                "d44af763-b922-468b-9705-dc6ef34f22e0": {
                  processingItems: [
                    {
                      transition: {
                        id: "aab864da-f52a-4eba-a00a-035c905d761e",
                        transitionType: "GO_TO",
                        eventId: "",
                        label: "Complete",
                        eventLog: "",
                        nodeId: "cfee3c5d-4f8c-499f-9234-bdc258c56efe"
                      },
                      id: "d9462c5b-4c67-48f5-8fd6-acf39733408f",
                      note: ""
                    }
                  ]
                }
              },
              lastModified: "2022-12-09T08:12:47.715Z",
              parentNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
            },
            concepts: [
              {
                conceptId: "fd7bb012-dbe9-4b7a-815a-746a8bcb7768",
                collectGotoNodeId: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
                processGotoNodeId: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
                conceptName: "",
                manualComplete: false,
                collectExpressionId: "",
                processExpressionId: "",
                multiConceptExpressionId: ""
              },
              {
                conceptId: "1a2e1be3-2cb5-4522-95bf-74cbf584fa1c",
                collectGotoNodeId: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
                processGotoNodeId: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
                conceptName: "",
                manualComplete: false,
                collectExpressionId: "",
                processExpressionId: "",
                multiConceptExpressionId: ""
              },
              {
                conceptId: "e6275e2b-75d6-4b89-8ef0-05055b21a1c5",
                collectGotoNodeId: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8",
                processGotoNodeId: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8",
                conceptName: "",
                manualComplete: false,
                collectExpressionId: "",
                processExpressionId: "",
                multiConceptExpressionId: ""
              }
            ],
            intentSwitchingDisabled: false,
            intentSwitchTransition: {
              id: "fd7a92bf-e993-4436-83fd-86d6d3224717",
              transitionType: "RETURN_TO_INTENT_MAPPER",
              eventId: "",
              label: "Intent Switch",
              eventLog: ""
            },
            intentSwitchTransitionId: "fd7a92bf-e993-4436-83fd-86d6d3224717",
            initialTransitionId: "c9127986-68f2-4e85-a5ab-2a572fa0ae4f",
            finalTransitionId: "e27f6940-577e-404f-a0ca-a763b2d7c006",
            timestamp: "2022-12-09T08:12:47.635Z"
          },
          eventHandlers: [],
          nodeProperties: {
            name: "Get Order Details",
            description: "",
            initialTransition: {
              id: "c9127986-68f2-4e85-a5ab-2a572fa0ae4f",
              channelProcessingItemsMap: {
                "d44af763-b922-468b-9705-dc6ef34f22e0": {
                  processingItems: []
                }
              },
              lastModified: "2022-12-09T08:12:47.715Z",
              parentNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
            },
            finalTransition: {
              id: "e27f6940-577e-404f-a0ca-a763b2d7c006",
              channelProcessingItemsMap: {
                "d44af763-b922-468b-9705-dc6ef34f22e0": {
                  processingItems: [
                    {
                      transition: {
                        id: "aab864da-f52a-4eba-a00a-035c905d761e",
                        transitionType: "GO_TO",
                        eventId: "",
                        label: "Complete",
                        eventLog: "",
                        nodeId: "cfee3c5d-4f8c-499f-9234-bdc258c56efe"
                      },
                      id: "d9462c5b-4c67-48f5-8fd6-acf39733408f",
                      note: ""
                    }
                  ]
                }
              },
              lastModified: "2022-12-09T08:12:47.715Z",
              parentNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
            },
            concepts: [
              {
                conceptId: "fd7bb012-dbe9-4b7a-815a-746a8bcb7768",
                collectGotoNodeId: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
                processGotoNodeId: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
                conceptName: "",
                manualComplete: false,
                collectExpressionId: "",
                processExpressionId: "",
                multiConceptExpressionId: ""
              },
              {
                conceptId: "1a2e1be3-2cb5-4522-95bf-74cbf584fa1c",
                collectGotoNodeId: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
                processGotoNodeId: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
                conceptName: "",
                manualComplete: false,
                collectExpressionId: "",
                processExpressionId: "",
                multiConceptExpressionId: ""
              },
              {
                conceptId: "e6275e2b-75d6-4b89-8ef0-05055b21a1c5",
                collectGotoNodeId: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8",
                processGotoNodeId: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8",
                conceptName: "",
                manualComplete: false,
                collectExpressionId: "",
                processExpressionId: "",
                multiConceptExpressionId: ""
              }
            ],
            intentSwitchingDisabled: false,
            intentSwitchTransition: {
              id: "fd7a92bf-e993-4436-83fd-86d6d3224717",
              transitionType: "RETURN_TO_INTENT_MAPPER",
              eventId: "",
              label: "Intent Switch",
              eventLog: ""
            },
            intentSwitchTransitionId: "fd7a92bf-e993-4436-83fd-86d6d3224717",
            initialTransitionId: "c9127986-68f2-4e85-a5ab-2a572fa0ae4f",
            finalTransitionId: "e27f6940-577e-404f-a0ca-a763b2d7c006",
            timestamp: "2022-12-09T08:12:47.635Z"
          },
          nodeType: "controllerNode",
          hasParent: true,
          processingItems: [
            {
              transition: {
                id: "7f163a46-2f15-4d92-976f-ac190e487beb",
                nodeId: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
                transitionType: "GO_TO",
                conceptId: "fd7bb012-dbe9-4b7a-815a-746a8bcb7768"
              },
              processingItemsParentKey: "concepts"
            },
            {
              transition: {
                id: "ba8f6388-f53d-400a-9acd-f86d31130137",
                nodeId: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
                transitionType: "GO_TO",
                conceptId: "1a2e1be3-2cb5-4522-95bf-74cbf584fa1c"
              },
              processingItemsParentKey: "concepts"
            },
            {
              transition: {
                id: "f230c3bb-dc27-4a02-b545-9b315e67894e",
                nodeId: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8",
                transitionType: "GO_TO",
                conceptId: "e6275e2b-75d6-4b89-8ef0-05055b21a1c5"
              },
              processingItemsParentKey: "concepts"
            },
            {
              transition: {
                id: "fd7a92bf-e993-4436-83fd-86d6d3224717",
                transitionType: "RETURN_TO_INTENT_MAPPER",
                eventId: "",
                label: "Intent Switch",
                eventLog: ""
              },
              processingItemsParentId: "fd7a92bf-e993-4436-83fd-86d6d3224717",
              processingItemsParentKey: "intentSwitchTransition"
            },
            {
              transition: {
                id: "aab864da-f52a-4eba-a00a-035c905d761e",
                transitionType: "GO_TO",
                eventId: "",
                label: "Complete",
                eventLog: "",
                nodeId: "cfee3c5d-4f8c-499f-9234-bdc258c56efe"
              },
              id: "d9462c5b-4c67-48f5-8fd6-acf39733408f",
              note: "",
              channelId: "d44af763-b922-468b-9705-dc6ef34f22e0",
              processingItemsParentId: "e27f6940-577e-404f-a0ca-a763b2d7c006",
              processingItemsParentKey: "finalTransitionId"
            }
          ]
        },
        nodeType: "controllerNode",
        type: "finalTransition"
      }
    ],
    messageHeight: 0,
    height: 102,
    blockHeight: 46,
    x: 0,
    y: 806,
    width: 195
  },
  "5dfa1418-0836-42ab-8151-3a455e72090e": {
    id: "5dfa1418-0836-42ab-8151-3a455e72090e",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "intentmapperNode2",
    hasParent: true,
    name: "Intent Mapper",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "881ecd1c-782f-42c1-b2f9-1a0674537931"
      },
      {
        target_node_id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
      },
      {
        target_node_id: "560288e5-0af2-4d0c-b677-9397e4207848"
      }
    ],
    processedPItems: [
      {
        type: "mapCount",
        mapCount: 2
      },
      {
        content: "NO_INTENT",
        mappingId: "69ef8f0d-b081-43b3-b027-efa014d2bf01",
        mapping: {
          id: "1eed7dae-269a-4a36-ba03-1574f1057574",
          nodeId: "5dfa1418-0836-42ab-8151-3a455e72090e",
          intentId: "69ef8f0d-b081-43b3-b027-efa014d2bf01",
          destination: {
            nodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931"
          }
        },
        type: "mapping",
        transition: {
          id: "69ef8f0d-b081-43b3-b027-efa014d2bf01",
          nodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931",
          transitionType: "GO_TO"
        },
        processingItemsParentKey: "intentMapping"
      },
      {
        content: "ORDER_COFFEE",
        mappingId: "6c763576-2d0b-42a3-955c-0474d67be128",
        mapping: {
          id: "fcbd1ef1-63a4-43fb-a68d-61b1051d7dbb",
          nodeId: "5dfa1418-0836-42ab-8151-3a455e72090e",
          intentId: "6c763576-2d0b-42a3-955c-0474d67be128",
          destination: {
            nodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
          }
        },
        type: "mapping",
        transition: {
          id: "6c763576-2d0b-42a3-955c-0474d67be128",
          nodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
          transitionType: "GO_TO"
        },
        processingItemsParentKey: "intentMapping"
      },
      {
        content: {
          key: null,
          ref: null,
          props: {
            children: {
              key: null,
              ref: null,
              props: {
                children: [
                  {
                    type: {
                      attrs: [],
                      componentStyle: {
                        rules: [
                          "flex:1;vertical-align:super;overflow:hidden;text-overflow:ellipsis;"
                        ],
                        staticRulesId: "",
                        isStatic: false,
                        componentId:
                          "node-utils__PortContentLabel-sc-1buktr3-1",
                        baseHash: -412407955
                      },
                      displayName: "node-utils__PortContentLabel",
                      foldedComponentIds: [],
                      styledComponentId:
                        "node-utils__PortContentLabel-sc-1buktr3-1",
                      target: "div"
                    },
                    key: null,
                    ref: null,
                    props: {
                      children: "On Return"
                    },
                    _owner: null,
                    _store: {}
                  },
                  null,
                  null
                ]
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        },
        type: "finalTransition",
        transition: {
          id: "8601730d-510c-4972-84a6-fcf92dc31242",
          transitionType: "GO_TO",
          eventId: "",
          label: "On Return",
          eventLog: "",
          nodeId: "560288e5-0af2-4d0c-b677-9397e4207848"
        },
        processingItemsParentKey: "intentMappingTransition"
      }
    ],
    messageHeight: 0,
    height: 158,
    blockHeight: 46,
    x: 0,
    y: 573,
    width: 195
  },
  "fc84dd7b-f207-4770-8e3d-7058bbc81951": {
    id: "fc84dd7b-f207-4770-8e3d-7058bbc81951",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "messageNode",
    hasParent: true,
    name: "Message",
    messagePromptAssets: {
      message: {
        id: "d923ac38-c89f-48e1-b375-ed14f460951b",
        name: "hello_and_welcome_to_the_coffee_app_",
        prompts: [
          {
            payload: {
              displayText: "Hello and welcome to the coffee app.",
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "d44af763-b922-468b-9705-dc6ef34f22e0",
            lastModified: "2022-12-09T08:12:46.670Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2022-12-09T08:12:46.667Z"
      },
      promptText: "Hello and welcome to the coffee app.",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "881ecd1c-782f-42c1-b2f9-1a0674537931"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "2da733e1-6392-4763-b808-16dba679afe4",
          transitionType: "GO_TO",
          eventId: "",
          label: "GoTo: Question & Answer",
          eventLog: "",
          nodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931"
        },
        id: "52452cca-2621-46ba-b52e-82cf989e1920",
        note: "",
        channelId: "d44af763-b922-468b-9705-dc6ef34f22e0",
        processingItemsParentId: "240e1059-f496-4fcf-ae25-ba7b03c81bfe",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 83,
    height: 157,
    blockHeight: 129,
    x: 0,
    y: 109,
    width: 195
  },
  "560288e5-0af2-4d0c-b677-9397e4207848": {
    id: "560288e5-0af2-4d0c-b677-9397e4207848",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "externalactionNode",
    hasParent: true,
    name: "STUB—IGNORE ME",
    messagePromptAssets: {
      message: null,
      promptText: "",
      promptTags: []
    },
    edges: [],
    processedPItems: [],
    messageHeight: 0,
    height: 46,
    blockHeight: 46,
    actionType: "END",
    x: 1080,
    y: 806,
    width: 195
  },
  "cfee3c5d-4f8c-499f-9234-bdc258c56efe": {
    id: "cfee3c5d-4f8c-499f-9234-bdc258c56efe",
    parentComponentId: "d30f66da-f91b-4bb5-b964-0c3e02dabec7",
    eventHandlers: [],
    nodeType: "messageNode",
    hasParent: true,
    name: "Wrap Up",
    messagePromptAssets: {
      message: {
        id: "30778b4c-74e4-4efe-aa4b-2b9e20775e25",
        name: "perfect_a_size_type_coming_right_up!",
        prompts: [
          {
            payload: {
              displayText: "Perfect, a size typecoming right up!",
              ttsText: "",
              audioFile: "",
              displayTextAnnotations: [],
              ttsTextAnnotations: [],
              ttsAudioBackup: "",
              ttsAudioBackupAnnotations: []
            },
            language: "en-US",
            channel: "d44af763-b922-468b-9705-dc6ef34f22e0",
            lastModified: "2022-12-09T08:12:47.122Z"
          }
        ],
        audioFileId: "",
        bargeinDisabled: false,
        lastModified: "2022-12-09T08:12:47.120Z"
      },
      promptText: "Perfect, a size typecoming right up!",
      promptTags: []
    },
    edges: [
      {
        target_node_id: "c3d33dad-d727-4e89-be5d-d16e7a0352c0"
      }
    ],
    processedPItems: [
      {
        transition: {
          id: "58d46049-f379-4546-90f6-c051fa5eb740",
          transitionType: "GO_TO",
          eventId: "",
          label: "GoTo: External Actions",
          eventLog: "",
          nodeId: "c3d33dad-d727-4e89-be5d-d16e7a0352c0"
        },
        id: "c7ab763e-462d-4fea-b664-f7a76fe1281d",
        note: "",
        channelId: "d44af763-b922-468b-9705-dc6ef34f22e0",
        processingItemsParentId: "3ec3a55e-7d08-4299-8897-34464e00c5be",
        processingItemsParentKey: "processingItems"
      }
    ],
    messageHeight: 83,
    height: 157,
    blockHeight: 129,
    x: 810,
    y: 983,
    width: 195
  }
};

export const mockEdgesOld = {
  "5efba79f-a52c-47a2-a0ce-e9bd94c45952-START-EDGE": {
    node: "5efba79f-a52c-47a2-a0ce-e9bd94c45952",
    pItem: {
      event: "",
      id: "5efba79f-a52c-47a2-a0ce-e9bd94c45952-START-EDGE",
      nodeId: "fc84dd7b-f207-4770-8e3d-7058bbc81951",
      transitionType: "GO_TO",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "down",
      direction: "center",
      end: {
        id: "fc84dd7b-f207-4770-8e3d-7058bbc81951",
        height: 157,
        width: 195,
        x: 0,
        y: 109,
        edges: [
          {
            targetNodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931"
          }
        ]
      },
      start: {
        id: "5efba79f-a52c-47a2-a0ce-e9bd94c45952",
        height: 34,
        width: 85,
        x: 0,
        y: 0,
        edges: [
          {
            targetNodeId: "fc84dd7b-f207-4770-8e3d-7058bbc81951"
          }
        ]
      }
    },
    course: "down",
    start: {
      x: 42.5,
      y: 34
    },
    end: {
      x: 42.5,
      y: 103
    },
    column1: 42.5,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "2da733e1-6392-4763-b808-16dba679afe4": {
    node: "fc84dd7b-f207-4770-8e3d-7058bbc81951",
    pItem: {
      id: "2da733e1-6392-4763-b808-16dba679afe4",
      transitionType: "GO_TO",
      eventId: "",
      label: "GoTo: Question & Answer",
      eventLog: "",
      nodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "881ecd1c-782f-42c1-b2f9-1a0674537931",
        height: 157,
        width: 195,
        x: 0,
        y: 341,
        edges: [
          {
            targetNodeId: "5dfa1418-0836-42ab-8151-3a455e72090e"
          }
        ]
      },
      start: {
        id: "fc84dd7b-f207-4770-8e3d-7058bbc81951",
        height: 157,
        width: 195,
        x: 0,
        y: 109,
        edges: [
          {
            targetNodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: -3,
      y: 249
    },
    end: {
      x: -26,
      y: 362.5
    },
    column1: -47,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "8179cf2f-6598-4f86-8c50-35a954c6342c": {
    node: "881ecd1c-782f-42c1-b2f9-1a0674537931",
    pItem: {
      id: "8179cf2f-6598-4f86-8c50-35a954c6342c",
      transitionType: "GO_TO",
      eventId: "",
      label: "GoTo: Intent Mapper",
      eventLog: "",
      nodeId: "5dfa1418-0836-42ab-8151-3a455e72090e",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "5dfa1418-0836-42ab-8151-3a455e72090e",
        height: 158,
        width: 195,
        x: 0,
        y: 573,
        edges: [
          {
            targetNodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931"
          },
          {
            targetNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
          },
          {
            targetNodeId: "560288e5-0af2-4d0c-b677-9397e4207848"
          }
        ]
      },
      start: {
        id: "881ecd1c-782f-42c1-b2f9-1a0674537931",
        height: 157,
        width: 195,
        x: 0,
        y: 341,
        edges: [
          {
            targetNodeId: "5dfa1418-0836-42ab-8151-3a455e72090e"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: -3,
      y: 481
    },
    end: {
      x: -26,
      y: 594.5
    },
    column1: -47,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "69ef8f0d-b081-43b3-b027-efa014d2bf01": {
    node: "5dfa1418-0836-42ab-8151-3a455e72090e",
    pItem: {
      id: "69ef8f0d-b081-43b3-b027-efa014d2bf01",
      nodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931",
      transitionType: "GO_TO",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "right-up-left",
      direction: "right",
      end: {
        id: "881ecd1c-782f-42c1-b2f9-1a0674537931",
        height: 157,
        width: 195,
        x: 0,
        y: 341,
        edges: [
          {
            targetNodeId: "5dfa1418-0836-42ab-8151-3a455e72090e"
          }
        ]
      },
      start: {
        id: "5dfa1418-0836-42ab-8151-3a455e72090e",
        height: 158,
        width: 195,
        x: 0,
        y: 573,
        edges: [
          {
            targetNodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931"
          },
          {
            targetNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
          },
          {
            targetNodeId: "560288e5-0af2-4d0c-b677-9397e4207848"
          }
        ]
      }
    },
    course: "right-up-left",
    start: {
      x: 198,
      y: 658
    },
    end: {
      x: 201,
      y: 362.5
    },
    column1: 229,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "6c763576-2d0b-42a3-955c-0474d67be128": {
    node: "5dfa1418-0836-42ab-8151-3a455e72090e",
    pItem: {
      id: "6c763576-2d0b-42a3-955c-0474d67be128",
      nodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
      transitionType: "GO_TO",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
        height: 102,
        width: 195,
        x: 0,
        y: 806,
        edges: [
          {
            targetNodeId: "515dfcd0-8d43-4aef-9519-3ebc3312ef71"
          },
          {
            targetNodeId: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35"
          },
          {
            targetNodeId: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8"
          },
          {
            targetNodeId: "cfee3c5d-4f8c-499f-9234-bdc258c56efe"
          }
        ]
      },
      start: {
        id: "5dfa1418-0836-42ab-8151-3a455e72090e",
        height: 158,
        width: 195,
        x: 0,
        y: 573,
        edges: [
          {
            targetNodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931"
          },
          {
            targetNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
          },
          {
            targetNodeId: "560288e5-0af2-4d0c-b677-9397e4207848"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: -3,
      y: 686
    },
    end: {
      x: -26,
      y: 827.5
    },
    column1: -47,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "8601730d-510c-4972-84a6-fcf92dc31242": {
    node: "5dfa1418-0836-42ab-8151-3a455e72090e",
    pItem: {
      id: "8601730d-510c-4972-84a6-fcf92dc31242",
      transitionType: "GO_TO",
      eventId: "",
      label: "On Return",
      eventLog: "",
      nodeId: "560288e5-0af2-4d0c-b677-9397e4207848",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "right-down-right-down",
      direction: "right",
      end: {
        id: "560288e5-0af2-4d0c-b677-9397e4207848",
        height: 46,
        width: 195,
        x: 1080,
        y: 806,
        edges: []
      },
      start: {
        id: "5dfa1418-0836-42ab-8151-3a455e72090e",
        height: 158,
        width: 195,
        x: 0,
        y: 573,
        edges: [
          {
            targetNodeId: "881ecd1c-782f-42c1-b2f9-1a0674537931"
          },
          {
            targetNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
          },
          {
            targetNodeId: "560288e5-0af2-4d0c-b677-9397e4207848"
          }
        ]
      }
    },
    course: "right-down-right-down",
    start: {
      x: 198,
      y: 714
    },
    end: {
      x: 1181,
      y: 800
    },
    column1: 216,
    column2: 1174,
    row1: 765,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "aab864da-f52a-4eba-a00a-035c905d761e": {
    node: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
    pItem: {
      id: "aab864da-f52a-4eba-a00a-035c905d761e",
      transitionType: "GO_TO",
      eventId: "",
      label: "Complete",
      eventLog: "",
      nodeId: "cfee3c5d-4f8c-499f-9234-bdc258c56efe",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "right-down-right-down",
      direction: "right",
      end: {
        id: "cfee3c5d-4f8c-499f-9234-bdc258c56efe",
        height: 157,
        width: 195,
        x: 810,
        y: 983,
        edges: [
          {
            targetNodeId: "c3d33dad-d727-4e89-be5d-d16e7a0352c0"
          }
        ]
      },
      start: {
        id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
        height: 102,
        width: 195,
        x: 0,
        y: 806,
        edges: [
          {
            targetNodeId: "515dfcd0-8d43-4aef-9519-3ebc3312ef71"
          },
          {
            targetNodeId: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35"
          },
          {
            targetNodeId: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8"
          },
          {
            targetNodeId: "cfee3c5d-4f8c-499f-9234-bdc258c56efe"
          }
        ]
      }
    },
    course: "right-down-right-down",
    start: {
      x: 198,
      y: 891
    },
    end: {
      x: 911,
      y: 977
    },
    column1: 216,
    column2: 904,
    row1: 942,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "d10ec4d2-a835-4cda-b41f-c70ea2d0210e": {
    node: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
    pItem: {
      id: "d10ec4d2-a835-4cda-b41f-c70ea2d0210e",
      transitionType: "GO_TO",
      eventId: "",
      label: "GoTo",
      eventLog: "",
      nodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
      column1Offset: 1,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-up-right",
      direction: "left",
      end: {
        id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
        height: 102,
        width: 195,
        x: 0,
        y: 806,
        edges: [
          {
            targetNodeId: "515dfcd0-8d43-4aef-9519-3ebc3312ef71"
          },
          {
            targetNodeId: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35"
          },
          {
            targetNodeId: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8"
          },
          {
            targetNodeId: "cfee3c5d-4f8c-499f-9234-bdc258c56efe"
          }
        ]
      },
      start: {
        id: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
        height: 157,
        width: 195,
        x: 0,
        y: 983,
        edges: [
          {
            targetNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
          }
        ]
      }
    },
    course: "left-up-right",
    start: {
      x: -3,
      y: 1123
    },
    end: {
      x: -26,
      y: 827.5
    },
    column1: -47,
    column1Offset: 1,
    column2Offset: 0,
    row1Offset: 0
  },
  "fe027626-e22f-428f-a2f9-b79b7b3729ad": {
    node: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
    pItem: {
      id: "fe027626-e22f-428f-a2f9-b79b7b3729ad",
      transitionType: "GO_TO",
      eventId: "",
      label: "GoTo",
      eventLog: "",
      nodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-up-left",
      direction: "left",
      end: {
        id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
        height: 102,
        width: 195,
        x: 0,
        y: 806,
        edges: [
          {
            targetNodeId: "515dfcd0-8d43-4aef-9519-3ebc3312ef71"
          },
          {
            targetNodeId: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35"
          },
          {
            targetNodeId: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8"
          },
          {
            targetNodeId: "cfee3c5d-4f8c-499f-9234-bdc258c56efe"
          }
        ]
      },
      start: {
        id: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
        height: 157,
        width: 195,
        x: 270,
        y: 983,
        edges: [
          {
            targetNodeId: "ed6c4115-2a7e-485a-9c88-b06c6af0281e"
          }
        ]
      }
    },
    course: "left-up-left",
    start: {
      x: 267,
      y: 1123
    },
    end: {
      x: 201,
      y: 827.5
    },
    column1: 223,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  },
  "58d46049-f379-4546-90f6-c051fa5eb740": {
    node: "cfee3c5d-4f8c-499f-9234-bdc258c56efe",
    pItem: {
      id: "58d46049-f379-4546-90f6-c051fa5eb740",
      transitionType: "GO_TO",
      eventId: "",
      label: "GoTo: External Actions",
      eventLog: "",
      nodeId: "c3d33dad-d727-4e89-be5d-d16e7a0352c0",
      column1Offset: 0,
      column2Offset: 0,
      horizOffset: 0,
      course: "left-down-right",
      direction: "left",
      end: {
        id: "c3d33dad-d727-4e89-be5d-d16e7a0352c0",
        height: 46,
        width: 195,
        x: 810,
        y: 1243,
        edges: []
      },
      start: {
        id: "cfee3c5d-4f8c-499f-9234-bdc258c56efe",
        height: 157,
        width: 195,
        x: 810,
        y: 983,
        edges: [
          {
            targetNodeId: "c3d33dad-d727-4e89-be5d-d16e7a0352c0"
          }
        ]
      }
    },
    course: "left-down-right",
    start: {
      x: 807,
      y: 1123
    },
    end: {
      x: 784,
      y: 1264.5
    },
    column1: 763,
    column1Offset: 0,
    column2Offset: 0,
    row1Offset: 0
  }
};
