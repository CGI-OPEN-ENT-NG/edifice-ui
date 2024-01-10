//-------------------------------------
//------------------ Global definitions
//-------------------------------------

//------------------------- Data types
//-- Error codes
export const ERROR_CODE = {
  SUCCESS: "0000",
  UNKNOWN: "0010",
  NOT_INITIALIZED: "0020",
  NOT_SUPPORTED: "0030",
  APP_NOT_FOUND: "0040",
  AGENT_NOT_FOUND: "0050",
  TRANSPORT_ERROR: "0060",
  TIME_OUT: "0070",
  MALFORMED_DATA: "0080",
  NOT_LOGGED_IN: "0090",
} as const;
export type ErrorCode = (typeof ERROR_CODE)[keyof typeof ERROR_CODE];

//-- Core applications (but many others exist).
export const APP = {
  ADMIN: "admin",
  ARCHIVE: "archive",
  AUTH: "auth",
  CAS: "cas",
  COMMUNICATION: "communication",
  CONVERSATION: "conversation",
  DIRECTORY: "directory", // FIXME userbook OR directory : the choice may impact some configurations, @see IXitiTrackingParams.NOM_PAGE for example
  USERBOOK: "userbook",
  INFRA: "infra",
  PORTAL: "portal",
  TIMELINE: "timeline",
  WORKSPACE: "workspace",
  // -- a few others commonly used apps
  EXPLORER: "explorer",
} as const;
export type App = (typeof APP)[keyof typeof APP] | string; // type App = "admin" | "archive" | "auth"...

//-- Semantical typings
/**
 * An ID is a unique string in its applicable field.
 */
export type ID = string;

/**
 * Type of resource generated by an application.
 * For example "folder", "blog", "mindmap"...
 */
export type ResourceType = string;

//-- User preferences keys
export const USER_PREFS = {
  APPS: "apps",
  WIDGETS: "widgets",
  LANGUAGE: "language",
  AUTH_CONNECTOR_ACCESSED: "authenticatedConnectorsAccessed",
  CURSUS: "cursus",
  INFOTIP: "infotip",
  RGPD_COOKIES: "rgpdCookies",
  // TODO compléter
} as const;
