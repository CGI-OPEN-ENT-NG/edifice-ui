/** Joker value to permit sending all events. */
export const SEND_ALL = '*';

/** Data tracking service. */
export interface IDataService {
  /**
   * Send a VIDEO_SAVE event to the backend.
   * @param video_id ID of the workspace's video document.
   * @param duration Duration of the video, in ms.
   * @param weight Weight  of the video, in bytes.
   * @param isCaptation Truthy is the video was captured on the end-user device.
   * @param url Current URL of the navigator, when video was saved.
   * @param browser Browser name and version (space-separated)
   * @param deviceType @see UAParser.getDevice().type => console|mobile|tablet|smarttv|wearable|embedded
   */
  trackVideoSave(
    video_id: string,
    duration: number,
    weight: number,
    isCaptation: boolean,
    url: string,
    browser: string,
    deviceType?: string,
  ): void;

  /**
   * Send a VIDEO_READ event to the backend.
   * @param video_id ID of the workspace's video document.
   * @param isCaptation Truthy is the video was captured on the end-user device.
   * @param url Current URL of the navigator, when video is played.
   * @param browser Browser name and version (space-separated)
   * @param deviceType @see UAParser.getDevice().type => console|mobile|tablet|smarttv|wearable|embedded
   */
  trackVideoRead(
    video_id: string,
    isCaptation: boolean,
    url: string,
    browser: string,
    deviceType?: string,
  ): void;

  /**
   * Send a SPEECH_AND_TEXT event to the backend.
   * @param direction speech-to-text (voice recognition) or text-to-speech (voice generation)
   */
  trackSpeechAndText(direction: 'STT' | 'TTS'): void;

  /**
   * Send a ACCESS_LIBRARY_FROM_EXPLORER event to the backend.
   */
  trackAccessLibraryFromExplorer(): void;
}

/** Public properties of the DataService. */
export interface DataServiceProps {
  /** Parameters for web applications. */
  web?: {
    /**
     * If defined, lists events to send to the backend (with "*" meaning all).
     * If undefined, all events will be sent.
     */
    send?: Array<string | typeof SEND_ALL>;
  };
}

/** An event broker for the DataService. */
export interface IEventBroker {
  /** Stops dispatching messages. */
  destroy(): void;
}
