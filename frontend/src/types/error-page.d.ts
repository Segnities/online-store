export interface ErrorPage {
    error: Error & {digest: string};
    reset:()=> void;
}