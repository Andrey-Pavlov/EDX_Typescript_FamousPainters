export function load(url: string): JQueryXHR {
    return $.getJSON(url);
}