declare module 'slash2'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'omit.js'

// google analytics interface
interface GAFieldsObject {
  eventCategory: string
  eventAction: string
  eventLabel?: string
  eventValue?: number
  nonInteraction?: boolean
}
interface Window {
  ga: (
    command: 'send',
    hitType: 'event' | 'pageview',
    fieldsObject: GAFieldsObject | string
  ) => void
  reloadAuthorized: () => void
}

declare let ga: Function

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false

interface ResponseStructure {
  success: boolean // if request is success
  data?: any // response data
  errorCode?: string // code for errorType
  errorMessage?: string // message display to user
  showType?: number // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
  traceId?: string // Convenient for back-end Troubleshooting: unique request ID
  host?: string // onvenient for backend Troubleshooting: host of current access server
}

interface AnyAction<T = any> {
  type: T
  [extraProps: string]: any
}
