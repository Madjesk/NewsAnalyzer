export default class SearchInput {
    constructor(form, input, button, errorForm, callBack) {
        this.form = form;
        this.input = input;
        this.button = button;
        this.errorForm = errorForm;
        this.callBack = callBack;
    }

    //Дизактивируем кнопку и инпут
    disactivateForm() {
        this.input.setAttribute('disabled', true);
        this.button.setAttribute('disabled', true);
    }

    //Активируем кнопку и инпут
    activateForm() {
        this.input.removeAttribute('disabled');
        this.button.removeAttribute('disabled');
    }

    //Валидируем значение инпута
    validate(value) {
        if (value.length > 2) {
            this.errorForm.classList.add('hide');
            return true
        } else {
            this.errorForm.classList.remove('hide');
            return false
        }
    }

    beginSearch() {
        event.preventDefault();
        // console.log('значение инпута ' + this.input.value);
        this.callBack(this.input.value);
    }

    formAddEventListener() {
        this.form.addEventListener('submit', this.beginSearch.bind(this))
    }

}