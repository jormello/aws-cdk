var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../@aws-cdk/sdk-v2-to-v3-adapter/lib/parameter-types.ts
var UINT8ARRAY_PARAMETERS;
var init_parameter_types = __esm({
  "../@aws-cdk/sdk-v2-to-v3-adapter/lib/parameter-types.ts"() {
    "use strict";
    UINT8ARRAY_PARAMETERS = {
      "acm": {
        "exportcertificate": [
          "Passphrase"
        ],
        "importcertificate": [
          "Certificate",
          "CertificateChain",
          "PrivateKey"
        ]
      },
      "acm-pca": {
        "importcertificateauthoritycertificate": [
          "Certificate",
          "CertificateChain"
        ],
        "issuecertificate": [
          "Csr"
        ]
      },
      "apigateway": {
        "importapikeys": [
          "body"
        ],
        "importdocumentationparts": [
          "body"
        ],
        "importrestapi": [
          "body"
        ],
        "putrestapi": [
          "body"
        ],
        "posttoconnection": [
          "Data"
        ]
      },
      "appconfig": {
        "createhostedconfigurationversion": [
          "Content"
        ]
      },
      "appsync": {
        "startschemacreation": [
          "definition"
        ]
      },
      "awsmobilehubservice": {
        "createproject": [
          "contents"
        ],
        "updateproject": [
          "contents"
        ]
      },
      "backup-storage": {
        "notifyobjectcomplete": [
          "MetadataBlob"
        ],
        "putchunk": [
          "Data"
        ],
        "putobject": [
          "InlineChunk"
        ]
      },
      "cloudfront": {
        "createfunction": [
          "FunctionCode"
        ],
        "testfunction": [
          "EventObject"
        ],
        "updatefunction": [
          "FunctionCode"
        ]
      },
      "cloudsearch": {
        "uploaddocuments": [
          "documents"
        ]
      },
      "codeartifact": {
        "publishpackageversion": [
          "assetContent"
        ]
      },
      "codecommit": {
        "createcommit": [
          "putFiles.*.fileContent"
        ],
        "createunreferencedmergecommit": [
          "conflictResolution.replaceContents.*.content"
        ],
        "mergebranchesbysquash": [
          "conflictResolution.replaceContents.*.content"
        ],
        "mergebranchesbythreeway": [
          "conflictResolution.replaceContents.*.content"
        ],
        "mergepullrequestbysquash": [
          "conflictResolution.replaceContents.*.content"
        ],
        "mergepullrequestbythreeway": [
          "conflictResolution.replaceContents.*.content"
        ],
        "putfile": [
          "fileContent"
        ]
      },
      "cognito-idp": {
        "setuicustomization": [
          "ImageFile"
        ]
      },
      "comprehend": {
        "classifydocument": [
          "Bytes"
        ],
        "detectentities": [
          "Bytes"
        ]
      },
      "datasync": {
        "createlocationhdfs": [
          "KerberosKeytab",
          "KerberosKrb5Conf"
        ],
        "createlocationobjectstorage": [
          "ServerCertificate"
        ],
        "updatelocationhdfs": [
          "KerberosKeytab",
          "KerberosKrb5Conf"
        ],
        "updatelocationobjectstorage": [
          "ServerCertificate"
        ]
      },
      "dms": {
        "importcertificate": [
          "CertificateWallet"
        ]
      },
      "ebs": {
        "putsnapshotblock": [
          "BlockData"
        ]
      },
      "ec2": {
        "bundleinstance": [
          "Storage.S3.UploadPolicy"
        ],
        "importkeypair": [
          "PublicKeyMaterial"
        ],
        "modifyinstanceattribute": [
          "UserData.Value"
        ]
      },
      "ecr": {
        "uploadlayerpart": [
          "layerPartBlob"
        ]
      },
      "ecr-public": {
        "createrepository": [
          "catalogData.logoImageBlob"
        ],
        "putrepositorycatalogdata": [
          "catalogData.logoImageBlob"
        ],
        "uploadlayerpart": [
          "layerPartBlob"
        ]
      },
      "firehose": {
        "putrecord": [
          "Record.Data"
        ],
        "putrecordbatch": [
          "Records.*.Data"
        ]
      },
      "gamelift": {
        "createscript": [
          "ZipFile"
        ],
        "updatescript": [
          "ZipFile"
        ]
      },
      "gamesparks": {
        "importgameconfiguration": [
          "ImportSource.File"
        ]
      },
      "glacier": {
        "uploadarchive": [
          "body"
        ],
        "uploadmultipartpart": [
          "body"
        ]
      },
      "glue": {
        "updatecolumnstatisticsforpartition": [
          "ColumnStatisticsList.*.StatisticsData.DecimalColumnStatisticsData.MaximumValue.UnscaledValue"
        ],
        "updatecolumnstatisticsfortable": [
          "ColumnStatisticsList.*.StatisticsData.DecimalColumnStatisticsData.MaximumValue.UnscaledValue"
        ]
      },
      "greengrass": {
        "createcomponentversion": [
          "inlineRecipe"
        ]
      },
      "iot": {
        "createotaupdate": [
          "files.*.codeSigning.customCodeSigning.signature.inlineDocument"
        ],
        "testinvokeauthorizer": [
          "mqttContext.password"
        ]
      },
      "iotanalytics": {
        "batchputmessage": [
          "messages.*.payload"
        ],
        "runpipelineactivity": [
          "payloads.*"
        ]
      },
      "iotdata": {
        "publish": [
          "payload"
        ],
        "updatethingshadow": [
          "payload"
        ]
      },
      "ioteventsdata": {
        "batchputmessage": [
          "messages.*.payload"
        ]
      },
      "iotsitewise": {
        "createportal": [
          "portalLogoImageFile.data"
        ],
        "updateportal": [
          "portalLogoImage.file.data"
        ]
      },
      "iotwireless": {
        "updateresourceposition": [
          "GeoJsonPayload"
        ]
      },
      "kafka": {
        "createconfiguration": [
          "ServerProperties"
        ],
        "updateconfiguration": [
          "ServerProperties"
        ]
      },
      "kendra": {
        "batchputdocument": [
          "Documents.*.Blob"
        ]
      },
      "kinesis": {
        "putrecord": [
          "Data"
        ],
        "putrecords": [
          "Records.*.Data"
        ]
      },
      "kinesisanalytics": {
        "createapplication": [
          "ApplicationConfiguration.ApplicationCodeConfiguration.CodeContent.ZipFileContent"
        ],
        "updateapplication": [
          "ApplicationConfigurationUpdate.ApplicationCodeConfigurationUpdate.CodeContentUpdate.ZipFileContentUpdate"
        ]
      },
      "kms": {
        "decrypt": [
          "CiphertextBlob",
          "Recipient.AttestationDocument"
        ],
        "encrypt": [
          "Plaintext"
        ],
        "generatedatakey": [
          "Recipient.AttestationDocument"
        ],
        "generatedatakeypair": [
          "Recipient.AttestationDocument"
        ],
        "generatemac": [
          "Message"
        ],
        "generaterandom": [
          "Recipient.AttestationDocument"
        ],
        "importkeymaterial": [
          "EncryptedKeyMaterial"
        ],
        "reencrypt": [
          "CiphertextBlob"
        ],
        "sign": [
          "Message"
        ],
        "verify": [
          "Message",
          "Signature"
        ],
        "verifymac": [
          "Mac",
          "Message"
        ]
      },
      "lambda": {
        "createfunction": [
          "Code.ZipFile"
        ],
        "invoke": [
          "Payload"
        ],
        "invokeasync": [
          "InvokeArgs"
        ],
        "invokewithresponsestream": [
          "Payload"
        ],
        "publishlayerversion": [
          "Content.ZipFile"
        ],
        "updatefunctioncode": [
          "ZipFile"
        ]
      },
      "lex": {
        "startimport": [
          "payload"
        ],
        "postcontent": [
          "inputStream"
        ],
        "recognizeutterance": [
          "inputStream"
        ]
      },
      "lookoutvision": {
        "detectanomalies": [
          "Body"
        ],
        "updatedatasetentries": [
          "Changes"
        ]
      },
      "mediastore": {
        "putobject": [
          "Body"
        ]
      },
      "mobiletargeting": {
        "sendmessages": [
          "MessageRequest.MessageConfiguration.EmailMessage.RawEmail.Data"
        ],
        "sendusersmessages": [
          "SendUsersMessageRequest.MessageConfiguration.EmailMessage.RawEmail.Data"
        ]
      },
      "qldb": {
        "sendcommand": [
          "CommitTransaction.CommitDigest",
          "ExecuteStatement.Parameters.*.IonBinary"
        ]
      },
      "quicksight": {
        "startassetbundleimportjob": [
          "AssetBundleImportSource.Body"
        ]
      },
      "rekognition": {
        "comparefaces": [
          "SourceImage.Bytes"
        ],
        "detectcustomlabels": [
          "Image.Bytes"
        ],
        "detectfaces": [
          "Image.Bytes"
        ],
        "detectlabels": [
          "Image.Bytes"
        ],
        "detectmoderationlabels": [
          "Image.Bytes"
        ],
        "detectprotectiveequipment": [
          "Image.Bytes"
        ],
        "detecttext": [
          "Image.Bytes"
        ],
        "indexfaces": [
          "Image.Bytes"
        ],
        "recognizecelebrities": [
          "Image.Bytes"
        ],
        "searchfacesbyimage": [
          "Image.Bytes"
        ],
        "searchusersbyimage": [
          "Image.Bytes"
        ],
        "updatedatasetentries": [
          "Changes.GroundTruth"
        ]
      },
      "s3": {
        "putobject": [
          "Body"
        ],
        "uploadpart": [
          "Body"
        ],
        "writegetobjectresponse": [
          "Body"
        ]
      },
      "sagemaker": {
        "invokeendpoint": [
          "Body"
        ],
        "invokeendpointwithresponsestream": [
          "Body"
        ]
      },
      "secretsmanager": {
        "createsecret": [
          "SecretBinary"
        ],
        "putsecretvalue": [
          "SecretBinary"
        ],
        "updatesecret": [
          "SecretBinary"
        ]
      },
      "ses": {
        "createdeliverabilitytestreport": [
          "Content.Raw.Data",
          "Content.Raw.Data"
        ],
        "sendemail": [
          "Content.Raw.Data",
          "Content.Raw.Data"
        ],
        "sendrawemail": [
          "RawMessage.Data"
        ]
      },
      "signer": {
        "signpayload": [
          "payload"
        ]
      },
      "ssm": {
        "registertaskwithmaintenancewindow": [
          "TaskInvocationParameters.Lambda.Payload"
        ],
        "updatemaintenancewindowtask": [
          "TaskInvocationParameters.Lambda.Payload"
        ]
      },
      "support": {
        "addattachmentstoset": [
          "attachments.*.data"
        ]
      },
      "synthetics": {
        "createcanary": [
          "Code.ZipFile"
        ],
        "updatecanary": [
          "Code.ZipFile"
        ]
      },
      "textract": {
        "analyzedocument": [
          "Document.Bytes"
        ],
        "analyzeexpense": [
          "Document.Bytes"
        ],
        "analyzeid": [
          "DocumentPages.*.Bytes"
        ],
        "detectdocumenttext": [
          "Document.Bytes"
        ]
      },
      "translate": {
        "importterminology": [
          "TerminologyData.File"
        ],
        "translatedocument": [
          "Document.Content"
        ]
      },
      "waf": {
        "updatebytematchset": [
          "Updates.*.ByteMatchTuple.TargetString"
        ]
      },
      "waf-regional": {
        "updatebytematchset": [
          "Updates.*.ByteMatchTuple.TargetString"
        ]
      },
      "wafv2": {
        "checkcapacity": [
          "Rules.*.Statement.ByteMatchStatement.SearchString"
        ],
        "createrulegroup": [
          "Rules.*.Statement.ByteMatchStatement.SearchString"
        ],
        "createwebacl": [
          "Rules.*.Statement.ByteMatchStatement.SearchString"
        ],
        "updaterulegroup": [
          "Rules.*.Statement.ByteMatchStatement.SearchString"
        ],
        "updatewebacl": [
          "Rules.*.Statement.ByteMatchStatement.SearchString"
        ]
      },
      "workspaces": {
        "importclientbranding": [
          "DeviceTypeAndroid.Logo",
          "DeviceTypeIos.Logo",
          "DeviceTypeIos.Logo2x",
          "DeviceTypeIos.Logo3x"
        ]
      }
    };
  }
});

// ../@aws-cdk/sdk-v2-to-v3-adapter/lib/coerce-api-parameters.ts
var coerce_api_parameters_exports = {};
__export(coerce_api_parameters_exports, {
  coerceApiParametersToUint8Array: () => coerceApiParametersToUint8Array,
  coerceToUint8Array: () => coerceToUint8Array
});
function coerceApiParametersToUint8Array(service, action, parameters = {}) {
  const pathsToCoerce = UINT8ARRAY_PARAMETERS?.[service.toLowerCase()]?.[action.toLowerCase()] ?? [];
  for (const path of pathsToCoerce) {
    coerceToUint8Array(parameters, path.split("."));
  }
  return parameters;
}
function coerceToUint8Array(obj, path) {
  if (path.length === 0) {
    return coerceValueToUint8Array(obj);
  }
  if (path[0] === "*" && Array.isArray(obj)) {
    return obj.map((e) => coerceToUint8Array(e, path.slice(1)));
  }
  if (obj && typeof obj === "object") {
    if (path[0] in obj) {
      obj[path[0]] = coerceToUint8Array(obj[path[0]], path.slice(1));
    }
    return obj;
  }
  return obj;
}
function coerceValueToUint8Array(x) {
  if (x instanceof Uint8Array) {
    return x;
  }
  if (typeof x === "string" || typeof x === "number") {
    return new TextEncoder().encode(x.toString());
  }
  return x;
}
var init_coerce_api_parameters = __esm({
  "../@aws-cdk/sdk-v2-to-v3-adapter/lib/coerce-api-parameters.ts"() {
    "use strict";
    init_parameter_types();
  }
});

// ../@aws-cdk/sdk-v2-to-v3-adapter/lib/find-client-constructor.ts
var find_client_constructor_exports = {};
__export(find_client_constructor_exports, {
  findV3ClientConstructor: () => findV3ClientConstructor
});
function findV3ClientConstructor(pkg) {
  const [_clientName, ServiceClient] = Object.entries(pkg).find(
    ([name]) => {
      return name.endsWith("Client") && name !== "__Client";
    }
  );
  return ServiceClient;
}
var init_find_client_constructor = __esm({
  "../@aws-cdk/sdk-v2-to-v3-adapter/lib/find-client-constructor.ts"() {
    "use strict";
  }
});

// ../@aws-cdk/sdk-v2-to-v3-adapter/lib/client-names.ts
var CLIENT_NAMES;
var init_client_names = __esm({
  "../@aws-cdk/sdk-v2-to-v3-adapter/lib/client-names.ts"() {
    "use strict";
    CLIENT_NAMES = [
      "ACM",
      "ACMPCA",
      "APIGateway",
      "ARCZonalShift",
      "AccessAnalyzer",
      "Account",
      "AlexaForBusiness",
      "Amp",
      "Amplify",
      "AmplifyBackend",
      "AmplifyUIBuilder",
      "ApiGatewayManagementApi",
      "ApiGatewayV2",
      "AppConfig",
      "AppConfigData",
      "AppIntegrations",
      "AppMesh",
      "AppRunner",
      "AppStream",
      "AppSync",
      "Appflow",
      "ApplicationAutoScaling",
      "ApplicationCostProfiler",
      "ApplicationInsights",
      "Athena",
      "AuditManager",
      "AugmentedAIRuntime",
      "AutoScaling",
      "AutoScalingPlans",
      "Backup",
      "BackupGateway",
      "BackupStorage",
      "Batch",
      "Billingconductor",
      "Braket",
      "Budgets",
      "CUR",
      "Chime",
      "ChimeSDKIdentity",
      "ChimeSDKMediaPipelines",
      "ChimeSDKMeetings",
      "ChimeSDKMessaging",
      "ChimeSDKVoice",
      "Cloud9",
      "CloudControl",
      "CloudDirectory",
      "CloudFormation",
      "CloudFront",
      "CloudHSM",
      "CloudHSMV2",
      "CloudSearch",
      "CloudSearchDomain",
      "CloudTrail",
      "CloudWatch",
      "CloudWatchEvents",
      "CloudWatchLogs",
      "CodeArtifact",
      "CodeBuild",
      "CodeCatalyst",
      "CodeCommit",
      "CodeDeploy",
      "CodeGuruProfiler",
      "CodeGuruReviewer",
      "CodePipeline",
      "CodeStar",
      "CodeStarNotifications",
      "CodeStarconnections",
      "CognitoIdentity",
      "CognitoIdentityServiceProvider",
      "CognitoSync",
      "Comprehend",
      "ComprehendMedical",
      "ComputeOptimizer",
      "ConfigService",
      "Connect",
      "ConnectCampaigns",
      "ConnectCases",
      "ConnectContactLens",
      "ConnectParticipant",
      "ControlTower",
      "CostExplorer",
      "CustomerProfiles",
      "DAX",
      "DLM",
      "DMS",
      "DataBrew",
      "DataExchange",
      "DataPipeline",
      "DataSync",
      "Detective",
      "DevOpsGuru",
      "DeviceFarm",
      "DirectConnect",
      "DirectoryService",
      "Discovery",
      "DocDB",
      "DocDBElastic",
      "Drs",
      "DynamoDB",
      "DynamoDBStreams",
      "EBS",
      "EC2",
      "EC2InstanceConnect",
      "ECR",
      "ECRPUBLIC",
      "ECS",
      "EFS",
      "EKS",
      "ELB",
      "ELBv2",
      "EMR",
      "EMRServerless",
      "EMRcontainers",
      "ES",
      "ElastiCache",
      "ElasticBeanstalk",
      "ElasticInference",
      "ElasticTranscoder",
      "EventBridge",
      "Evidently",
      "FMS",
      "FSx",
      "Finspace",
      "Finspacedata",
      "Firehose",
      "Fis",
      "ForecastQueryService",
      "ForecastService",
      "FraudDetector",
      "GameLift",
      "GameSparks",
      "Glacier",
      "GlobalAccelerator",
      "Glue",
      "Grafana",
      "Greengrass",
      "GreengrassV2",
      "GroundStation",
      "GuardDuty",
      "Health",
      "HealthLake",
      "Honeycode",
      "IAM",
      "IVS",
      "IdentityStore",
      "Imagebuilder",
      "Inspector",
      "Inspector2",
      "IoT1ClickDevicesService",
      "IoT1ClickProjects",
      "IoTAnalytics",
      "IoTEvents",
      "IoTEventsData",
      "IoTFleetHub",
      "IoTFleetWise",
      "IoTJobsDataPlane",
      "IoTRoboRunner",
      "IoTSecureTunneling",
      "IoTSiteWise",
      "IoTThingsGraph",
      "IoTTwinMaker",
      "IoTWireless",
      "Iot",
      "IotData",
      "IotDeviceAdvisor",
      "Ivschat",
      "KMS",
      "Kafka",
      "KafkaConnect",
      "Kendra",
      "Keyspaces",
      "Kinesis",
      "KinesisAnalytics",
      "KinesisAnalyticsV2",
      "KinesisVideo",
      "KinesisVideoArchivedMedia",
      "KinesisVideoMedia",
      "KinesisVideoSignalingChannels",
      "KinesisVideoWebRTCStorage",
      "LakeFormation",
      "Lambda",
      "LexModelBuildingService",
      "LexModelsV2",
      "LexRuntime",
      "LexRuntimeV2",
      "LicenseManager",
      "LicenseManagerLinuxSubscriptions",
      "LicenseManagerUserSubscriptions",
      "Lightsail",
      "Location",
      "LookoutEquipment",
      "LookoutMetrics",
      "LookoutVision",
      "M2",
      "MQ",
      "MTurk",
      "MWAA",
      "MachineLearning",
      "Macie",
      "Macie2",
      "ManagedBlockchain",
      "MarketplaceCatalog",
      "MarketplaceCommerceAnalytics",
      "MarketplaceEntitlementService",
      "MarketplaceMetering",
      "MediaConnect",
      "MediaConvert",
      "MediaLive",
      "MediaPackage",
      "MediaPackageVod",
      "MediaStore",
      "MediaStoreData",
      "MediaTailor",
      "MemoryDB",
      "Mgn",
      "MigrationHub",
      "MigrationHubConfig",
      "MigrationHubOrchestrator",
      "MigrationHubRefactorSpaces",
      "MigrationHubStrategy",
      "Mobile",
      "Neptune",
      "NetworkFirewall",
      "NetworkManager",
      "Nimble",
      "OAM",
      "Omics",
      "OpenSearch",
      "OpenSearchServerless",
      "OpsWorks",
      "OpsWorksCM",
      "Organizations",
      "Outposts",
      "PI",
      "Panorama",
      "Personalize",
      "PersonalizeEvents",
      "PersonalizeRuntime",
      "Pinpoint",
      "PinpointEmail",
      "PinpointSMSVoice",
      "PinpointSMSVoiceV2",
      "Pipes",
      "Polly",
      "Pricing",
      "PrivateNetworks",
      "Proton",
      "QLDB",
      "QLDBSession",
      "QuickSight",
      "RAM",
      "RDS",
      "RDSDataService",
      "RUM",
      "Rbin",
      "Redshift",
      "RedshiftData",
      "RedshiftServerless",
      "Rekognition",
      "Resiliencehub",
      "ResourceExplorer2",
      "ResourceGroups",
      "ResourceGroupsTaggingAPI",
      "RoboMaker",
      "RolesAnywhere",
      "Route53",
      "Route53Domains",
      "Route53RecoveryCluster",
      "Route53RecoveryControlConfig",
      "Route53RecoveryReadiness",
      "Route53Resolver",
      "S3",
      "S3Control",
      "S3Outposts",
      "SES",
      "SESV2",
      "SMS",
      "SNS",
      "SQS",
      "SSM",
      "SSMContacts",
      "SSMIncidents",
      "SSO",
      "SSOAdmin",
      "SSOOIDC",
      "STS",
      "SWF",
      "SageMaker",
      "SageMakerFeatureStoreRuntime",
      "SageMakerGeospatial",
      "SageMakerMetrics",
      "SageMakerRuntime",
      "SagemakerEdge",
      "SavingsPlans",
      "Scheduler",
      "Schemas",
      "SecretsManager",
      "SecurityHub",
      "SecurityLake",
      "ServerlessApplicationRepository",
      "ServiceCatalog",
      "ServiceCatalogAppRegistry",
      "ServiceDiscovery",
      "ServiceQuotas",
      "Shield",
      "Signer",
      "SimSpaceWeaver",
      "SnowDeviceManagement",
      "Snowball",
      "SsmSap",
      "StepFunctions",
      "StorageGateway",
      "Support",
      "SupportApp",
      "Synthetics",
      "Textract",
      "TimestreamQuery",
      "TimestreamWrite",
      "TranscribeService",
      "Transfer",
      "Translate",
      "VoiceID",
      "WAF",
      "WAFRegional",
      "WAFV2",
      "WellArchitected",
      "Wisdom",
      "WorkDocs",
      "WorkLink",
      "WorkMail",
      "WorkMailMessageFlow",
      "WorkSpaces",
      "WorkSpacesWeb",
      "XRay"
    ];
  }
});

// ../@aws-cdk/sdk-v2-to-v3-adapter/lib/client-package-names-map.ts
var CLIENT_PACKAGE_NAMES_MAP;
var init_client_package_names_map = __esm({
  "../@aws-cdk/sdk-v2-to-v3-adapter/lib/client-package-names-map.ts"() {
    "use strict";
    init_client_names();
    CLIENT_PACKAGE_NAMES_MAP = {
      ...CLIENT_NAMES.reduce(
        (acc, name) => ({
          ...acc,
          [name]: `client-${name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`.replace("-chime-sdk", "-chime-sdk-").replace("client-amplify-", "client-amplify").replace("client-cloud-", "client-cloud").replace("client-code-", "client-code").replace("client-connect-", "client-connect").replace("client-data-", "client-data").replace("client-io-t", "client-iot-").replace("client-iot-fleet-", "client-iotfleet").replace("client-lookout-", "client-lookout").replace("client-media-", "client-media").replace("client-migration-hub-", "client-migrationhub").replace("client-pinpoint-sms", "client-pinpoint-sms-").replace("client-route53", "client-route53-").replace("client-sage-maker", "client-sagemaker").replace("client-security-", "client-security").replace("client-work-", "client-work")
        }),
        {}
      ),
      AccessAnalyzer: "client-accessanalyzer",
      ACMPCA: "client-acm-pca",
      APIGateway: "client-api-gateway",
      ApiGatewayManagementApi: "client-apigatewaymanagementapi",
      ApiGatewayV2: "client-apigatewayv2",
      AppConfig: "client-appconfig",
      AppConfigData: "client-appconfigdata",
      AppIntegrations: "client-appintegrations",
      AppRunner: "client-apprunner",
      AppStream: "client-appstream",
      AppSync: "client-appsync",
      ApplicationCostProfiler: "client-applicationcostprofiler",
      ARCZonalShift: "client-arc-zonal-shift",
      AugmentedAIRuntime: "client-sage-maker-a2iruntime",
      AuditManager: "client-auditmanager",
      BackupStorage: "client-backupstorage",
      CUR: "client-cost-and-usage-report-service",
      CloudHSMV2: "client-cloudhsm-v2",
      CodeGuruProfiler: "client-codeguruprofiler",
      CodeStarconnections: "client-codestar-connections",
      CognitoIdentityServiceProvider: "client-cognito-identity-provider",
      ComprehendMedical: "client-comprehendmedical",
      ConnectContactLens: "client-connect-contact-lens",
      ControlTower: "client-controltower",
      DMS: "client-database-migration-service",
      DataPipeline: "client-data-pipeline",
      Discovery: "client-application-discovery-service",
      DevOpsGuru: "client-devops-guru",
      DynamoDB: "client-dynamodb",
      DynamoDBStreams: "client-dynamodb-streams",
      DocDB: "client-docdb",
      DocDBElastic: "client-docdb-elastic",
      EC2InstanceConnect: "client-ec2-instance-connect",
      ECRPUBLIC: "client-ecr-public",
      ELB: "client-elastic-load-balancing",
      ELBv2: "client-elastic-load-balancing-v2",
      ElastiCache: "client-elasticache",
      EMRcontainers: "client-emr-containers",
      EMRServerless: "client-emr-serverless",
      ES: "client-elasticsearch-service",
      EventBridge: "client-eventbridge",
      Finspacedata: "client-finspace-data",
      ForecastQueryService: "client-forecastquery",
      ForecastService: "client-forecast",
      FraudDetector: "client-frauddetector",
      GameLift: "client-gamelift",
      GameSparks: "client-gamesparks",
      GreengrassV2: "client-greengrassv2",
      GroundStation: "client-groundstation",
      GuardDuty: "client-guardduty",
      HealthLake: "client-healthlake",
      IdentityStore: "client-identitystore",
      IoTAnalytics: "client-iotanalytics",
      IotData: "client-iot-data-plane",
      IotDeviceAdvisor: "client-iotdeviceadvisor",
      IoTSecureTunneling: "client-iotsecuretunneling",
      IoTSiteWise: "client-iotsitewise",
      IoTThingsGraph: "client-iotthingsgraph",
      IoTTwinMaker: "client-iottwinmaker",
      IoTRoboRunner: "client-iot-roborunner",
      KafkaConnect: "client-kafkaconnect",
      KinesisVideoSignalingChannels: "client-kinesis-video-signaling",
      KinesisVideoWebRTCStorage: "client-kinesis-video-webrtc-storage",
      LakeFormation: "client-lakeformation",
      LexRuntime: "client-lex-runtime-service",
      ManagedBlockchain: "client-managedblockchain",
      MigrationHubConfig: "client-migrationhub-config",
      MigrationHubRefactorSpaces: "client-migration-hub-refactor-spaces",
      NetworkManager: "client-networkmanager",
      OpenSearch: "client-opensearch",
      OpenSearchServerless: "client-opensearchserverless",
      OpsWorks: "client-opsworks",
      OpsWorksCM: "client-opsworkscm",
      PrivateNetworks: "client-privatenetworks",
      QLDBSession: "client-qldb-session",
      QuickSight: "client-quicksight",
      ResourceExplorer2: "client-resource-explorer-2",
      RDSDataService: "client-rds-data",
      RoboMaker: "client-robomaker",
      RolesAnywhere: "client-rolesanywhere",
      Route53: "client-route-53",
      Route53Domains: "client-route-53-domains",
      Route53Resolver: "client-route53resolver",
      S3Control: "client-s3-control",
      SageMakerFeatureStoreRuntime: "client-sagemaker-featurestore-runtime",
      SavingsPlans: "client-savingsplans",
      SecurityHub: "client-securityhub",
      ServerlessApplicationRepository: "client-serverlessapplicationrepository",
      ServiceCatalogAppRegistry: "client-service-catalog-appregistry",
      ServiceDiscovery: "client-servicediscovery",
      SimSpaceWeaver: "client-simspaceweaver",
      SSMContacts: "client-ssm-contacts",
      SSMIncidents: "client-ssm-incidents",
      SSOAdmin: "client-sso-admin",
      SSOOIDC: "client-sso-oidc",
      StepFunctions: "client-sfn",
      TranscribeService: "client-transcribe",
      WAFRegional: "client-waf-regional",
      WellArchitected: "client-wellarchitected",
      WorkMailMessageFlow: "client-workmailmessageflow"
    };
  }
});

// ../@aws-cdk/sdk-v2-to-v3-adapter/lib/get-v3-client-package-name.ts
var get_v3_client_package_name_exports = {};
__export(get_v3_client_package_name_exports, {
  getV3ClientPackageName: () => getV3ClientPackageName
});
var getV3ClientPackageName;
var init_get_v3_client_package_name = __esm({
  "../@aws-cdk/sdk-v2-to-v3-adapter/lib/get-v3-client-package-name.ts"() {
    "use strict";
    init_client_package_names_map();
    getV3ClientPackageName = (clientName) => {
      if (clientName in CLIENT_PACKAGE_NAMES_MAP) {
        return `@aws-sdk/${CLIENT_PACKAGE_NAMES_MAP[clientName]}`;
      }
      throw new Error(`Client '${clientName}' is either deprecated or newly added. Please consider using the v3 package format (@aws-sdk/client-xxx).`);
    };
  }
});

// ../@aws-cdk/sdk-v2-to-v3-adapter/lib/sdk-v3-helpers.ts
var sdk_v3_helpers_exports = {};
__export(sdk_v3_helpers_exports, {
  getV3Client: () => getV3Client,
  getV3Command: () => getV3Command,
  loadV3ClientPackage: () => loadV3ClientPackage
});
function loadV3ClientPackage(service) {
  const packageName = service.startsWith("@aws-sdk/") ? service : getV3ClientPackageName(service);
  try {
    const pkg = require(packageName);
    const { version } = require(packageName + "/package.json");
    return {
      service: packageName.replace("@aws-sdk/client-", ""),
      pkg,
      packageName,
      packageVersion: version
    };
  } catch (e) {
    throw Error(`Service ${service} client package with name '${packageName}' does not exist.`);
  }
}
function getV3Client(sdkPkg, clientOptions = {}) {
  try {
    const ServiceClient = findV3ClientConstructor(sdkPkg.pkg);
    return new ServiceClient(clientOptions);
  } catch (e) {
    throw Error(`No client constructor found within package: ${sdkPkg.packageName}`);
  }
}
function getV3Command(sdkPkg, action) {
  const commandName = action.endsWith("Command") ? action : `${action}Command`;
  const command = Object.entries(sdkPkg.pkg).find(
    ([name]) => name.toLowerCase() === commandName.toLowerCase()
  )?.[1];
  if (!command) {
    throw new Error(`Unable to find command named: ${commandName} for api: ${action} in service package`);
  }
  return command;
}
var init_sdk_v3_helpers = __esm({
  "../@aws-cdk/sdk-v2-to-v3-adapter/lib/sdk-v3-helpers.ts"() {
    "use strict";
    init_find_client_constructor();
    init_get_v3_client_package_name();
  }
});

// ../@aws-cdk/sdk-v2-to-v3-adapter/lib/index.js
var require_lib = __commonJS({
  "../@aws-cdk/sdk-v2-to-v3-adapter/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getV3ClientPackageName = exports.findV3ClientConstructor = exports.coerceApiParametersToUint8Array = void 0;
    var coerce_api_parameters_1 = (init_coerce_api_parameters(), __toCommonJS(coerce_api_parameters_exports));
    Object.defineProperty(exports, "coerceApiParametersToUint8Array", { enumerable: true, get: function() {
      return coerce_api_parameters_1.coerceApiParametersToUint8Array;
    } });
    var find_client_constructor_1 = (init_find_client_constructor(), __toCommonJS(find_client_constructor_exports));
    Object.defineProperty(exports, "findV3ClientConstructor", { enumerable: true, get: function() {
      return find_client_constructor_1.findV3ClientConstructor;
    } });
    var get_v3_client_package_name_1 = (init_get_v3_client_package_name(), __toCommonJS(get_v3_client_package_name_exports));
    Object.defineProperty(exports, "getV3ClientPackageName", { enumerable: true, get: function() {
      return get_v3_client_package_name_1.getV3ClientPackageName;
    } });
    __exportStar((init_sdk_v3_helpers(), __toCommonJS(sdk_v3_helpers_exports)), exports);
  }
});

// custom-resources/lib/aws-custom-resource/runtime/aws-sdk-v3-handler.ts
var aws_sdk_v3_handler_exports = {};
__export(aws_sdk_v3_handler_exports, {
  forceSdkInstallation: () => forceSdkInstallation,
  handler: () => handler
});
module.exports = __toCommonJS(aws_sdk_v3_handler_exports);
var import_child_process = require("child_process");
var import_sdk_v2_to_v3_adapter = __toESM(require_lib());

// custom-resources/lib/aws-custom-resource/runtime/shared.ts
var PHYSICAL_RESOURCE_ID_REFERENCE = "PHYSICAL:RESOURCEID:";
var decoder = new TextDecoder();
function parseField(value) {
  if (Buffer.isBuffer(value)) {
    return value.toString("utf8");
  } else if (ArrayBuffer.isView(value)) {
    return decoder.decode(value.buffer);
  }
  return value;
}
function flatten(object) {
  function _flatten(child, path = []) {
    return [].concat(...Object.keys(child).map((key) => {
      const childKey = parseField(child[key]);
      return typeof childKey === "object" && childKey !== null ? _flatten(childKey, path.concat([key])) : { [path.concat([key]).join(".")]: childKey };
    }));
  }
  return Object.assign(
    {},
    ..._flatten(object)
  );
}
function decodeSpecialValues(object, physicalResourceId) {
  return JSON.parse(JSON.stringify(object), (_k, v) => {
    switch (v) {
      case PHYSICAL_RESOURCE_ID_REFERENCE:
        return physicalResourceId;
      default:
        return v;
    }
  });
}
function filterKeys(object, pred) {
  return Object.entries(object).reduce(
    (acc, [k, v]) => pred(k) ? { ...acc, [k]: v } : acc,
    {}
  );
}
function respond(event, responseStatus, reason, physicalResourceId, data) {
  const responseBody = JSON.stringify({
    Status: responseStatus,
    Reason: reason,
    PhysicalResourceId: physicalResourceId,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
    NoEcho: false,
    Data: data
  });
  console.log("Responding", responseBody);
  const parsedUrl = require("url").parse(event.ResponseURL);
  const requestOptions = {
    hostname: parsedUrl.hostname,
    path: parsedUrl.path,
    method: "PUT",
    headers: {
      "content-type": "",
      "content-length": Buffer.byteLength(responseBody, "utf8")
    }
  };
  return new Promise((resolve, reject) => {
    try {
      const request = require("https").request(requestOptions, resolve);
      request.on("error", reject);
      request.write(responseBody);
      request.end();
    } catch (e) {
      reject(e);
    }
  });
}
function decodeCall(call) {
  if (!call) {
    return void 0;
  }
  return JSON.parse(call);
}
function startsWithOneOf(searchStrings) {
  return function(string) {
    for (const searchString of searchStrings) {
      if (string.startsWith(searchString)) {
        return true;
      }
    }
    return false;
  };
}

// custom-resources/lib/aws-custom-resource/runtime/aws-sdk-v3-handler.ts
var installedSdk = {};
function forceSdkInstallation() {
  installedSdk = {};
}
function installLatestSdk(packageName) {
  console.log(`Installing latest AWS SDK v3: ${packageName}`);
  (0, import_child_process.execSync)(
    `NPM_CONFIG_UPDATE_NOTIFIER=false HOME=/tmp npm install ${packageName} --omit=dev --no-package-lock --no-save --prefix /tmp`
  );
  installedSdk = {
    ...installedSdk,
    [packageName]: true
  };
}
async function loadAwsSdk(packageName, installLatestAwsSdk) {
  let awsSdk;
  try {
    if (!installedSdk[packageName] && installLatestAwsSdk === "true") {
      try {
        installLatestSdk(packageName);
        awsSdk = require(`/tmp/node_modules/${packageName}`);
      } catch (e) {
        console.log(`Failed to install latest AWS SDK v3. Falling back to pre-installed version. Error: ${e}`);
        return require(packageName);
      }
    } else if (installedSdk[packageName]) {
      awsSdk = require(`/tmp/node_modules/${packageName}`);
    } else {
      awsSdk = require(packageName);
    }
  } catch (error) {
    throw Error(`Package ${packageName} does not exist.`);
  }
  return awsSdk;
}
async function handler(event, context) {
  try {
    event.ResourceProperties.Create = decodeCall(event.ResourceProperties.Create);
    event.ResourceProperties.Update = decodeCall(event.ResourceProperties.Update);
    event.ResourceProperties.Delete = decodeCall(event.ResourceProperties.Delete);
    let data = {};
    let physicalResourceId;
    switch (event.RequestType) {
      case "Create":
        physicalResourceId = event.ResourceProperties.Create?.physicalResourceId?.id ?? event.ResourceProperties.Update?.physicalResourceId?.id ?? event.ResourceProperties.Delete?.physicalResourceId?.id ?? event.LogicalResourceId;
        break;
      case "Update":
      case "Delete":
        physicalResourceId = event.ResourceProperties[event.RequestType]?.physicalResourceId?.id ?? event.PhysicalResourceId;
        break;
    }
    const call = event.ResourceProperties[event.RequestType];
    if (call) {
      const packageName = call.service.startsWith("@aws-sdk/") ? call.service : (0, import_sdk_v2_to_v3_adapter.getV3ClientPackageName)(call.service);
      let awsSdk = loadAwsSdk(
        packageName,
        event.ResourceProperties.InstallLatestAwsSdk
      );
      console.log(JSON.stringify({ ...event, ResponseURL: "..." }));
      let credentials;
      if (call.assumedRoleArn) {
        const timestamp = (/* @__PURE__ */ new Date()).getTime();
        const params = {
          RoleArn: call.assumedRoleArn,
          RoleSessionName: `${timestamp}-${physicalResourceId}`.substring(0, 64)
        };
        const { fromTemporaryCredentials } = await import("@aws-sdk/credential-providers");
        credentials = fromTemporaryCredentials({
          params,
          clientConfig: call.region !== void 0 ? { region: call.region } : void 0
        });
      }
      awsSdk = await awsSdk;
      const ServiceClient = (0, import_sdk_v2_to_v3_adapter.findV3ClientConstructor)(awsSdk);
      const client = new ServiceClient({
        apiVersion: call.apiVersion,
        credentials,
        region: call.region
      });
      const commandName = call.action.endsWith("Command") ? call.action : `${call.action}Command`;
      const Command = Object.entries(awsSdk).find(
        ([name]) => name.toLowerCase() === commandName.toLowerCase()
      )?.[1];
      let flatData = {};
      try {
        const response = await client.send(
          new Command(
            (call.parameters && decodeSpecialValues(call.parameters, physicalResourceId)) ?? {}
          )
        );
        flatData = {
          apiVersion: client.config.apiVersion,
          // For test purposes: check if apiVersion was correctly passed.
          region: await client.config.region().catch(() => void 0),
          // For test purposes: check if region was correctly passed.
          ...flatten(response)
        };
        let outputPaths;
        if (call.outputPath) {
          outputPaths = [call.outputPath];
        } else if (call.outputPaths) {
          outputPaths = call.outputPaths;
        }
        if (outputPaths) {
          data = filterKeys(flatData, startsWithOneOf(outputPaths));
        } else {
          data = flatData;
        }
      } catch (e) {
        const exceptionName = e.name ?? e.constructor.name;
        if (!call.ignoreErrorCodesMatching || !new RegExp(call.ignoreErrorCodesMatching).test(exceptionName)) {
          throw e;
        }
      }
      if (call.physicalResourceId?.responsePath) {
        physicalResourceId = flatData[call.physicalResourceId.responsePath];
      }
    }
    await respond(event, "SUCCESS", "OK", physicalResourceId, data);
  } catch (e) {
    console.log(e);
    await respond(event, "FAILED", e.message || "Internal Error", context.logStreamName, {});
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  forceSdkInstallation,
  handler
});
