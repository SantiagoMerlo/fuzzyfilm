/// <reference types="react-scripts" />

type WithChildren<T = {}> =
    T & { children?: React.ReactNode }