import $ from "../core";

$.prototype.show = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) continue;

        this[i].style.display = "";
    }


    return this;
};

$.prototype.hide = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) continue;

        this[i].style.display = "none";
    }

    return this;
}

$.prototype.toggleDisplay = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) continue;

        this[i].style.display = (window.getComputedStyle(this[i]).display === "none") ? "" : "none";
    }

    return this;
}