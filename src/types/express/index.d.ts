declare namespace Express {
  export interface Response {
    /**
     * sendResponse: Sends a JSON response with a meta object.
     * @param data - The actual data to send in the response.
     * @param meta - Optional meta information. If not provided, defaults to an empty message.
     * @returns The response object.
     */
    sendResponse(data: any, meta?: { message?: string; status: number }): this;
  }
}
