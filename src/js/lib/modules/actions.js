import $ from "../core";

$.prototype.html = function (content) {
    if (!content) {
        return this[0].innerHTML;
    } else {
        for (let i = 0; i < this.length; i++) {
            this[i].innerHTML = content;
        }
    }
    return this;
}

$.prototype.eq = function (i = 0) {
    const swap = this[i];
    const objLength = Object.keys(this);

    for (let i = 0; i < objLength.length; i++) {
        delete this[objLength[i]];
    }

    this[0] = swap;
    this.length = 1;

    return this;
}

$.prototype.index = function () {
    const parentElement = [...this[0].parentElement.children];

    return parentElement.findIndex((item) => {
        return item === this[0];
    });
}

$.prototype.find = function (selector) {
    const copyObj = Object.assign({}, this);
    let counter = 0;

    const clearThis = () => {
        let thisLength = Object.keys(this);

        for (let i = 0; i < thisLength.length; i++) {
            delete this[thisLength[i]];
        }
    }
    clearThis();


    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length === 0) continue;

        for (let i = 0; i < arr.length; i++) {
            this[counter] = arr[i];
            counter++
        }
    }

    this.length = counter;
    return this;
}

$.prototype.closest = function (selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (!this[i].closest(selector)) continue;

        this[counter] = this[i].closest(selector);
        counter++;
    }

    for (let i = counter; i < this.length; i++) {
        delete this[i];
    }

    this.length = counter;

    return this;
}

$.prototype.sibling = function () {
    let counter = 0;
    const copyObj = Object.assign({}, this);

    const clearThis = () => {
        let thisLength = Object.keys(this);

        for (let i = 0; i < thisLength.length; i++) {
            delete this[thisLength[i]];
        }
    }
    clearThis();

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentElement.children;

        for (let k = 0; k < arr.length; k++) {
            if (copyObj[i] === arr[k]) continue;

            this[counter] = arr[k];
            counter++;
        }
    }

    this.length = counter;
    return this;
}