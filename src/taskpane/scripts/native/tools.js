/*
    "tools.js"
    A collection of functions that help with certain problems.
*/

export function char_to_underscore(string) {
    /*
        Replaces a set of characters in a string with underscores.
    */
    var replacement_list = [/ /g, ".", "\\", "%", "/", "\n", "-", "(", ")", "|"];
    for (var replace in replacement_list) {
        string = string.replace(replacement_list[replace], "_");
    }
    return string;
}