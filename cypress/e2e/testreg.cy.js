
describe('Рег-форма', function () {
    
    it('Правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввести емейл
        cy.get('#pass').type('iLoveqastudio1'); // ввести пароль
        cy.get('#loginButton').click(); // нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible'); // проверить наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверить что бы крестик был видимый
        })
    it('Нажать кнопку забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#forgotEmailButton').click(); // нажать на кнопку забыли пароль
        cy.get('#mailForgot').type('toshagood@yandex.ru') // ввести почту
        cy.get('#restoreEmailButton').click(); // кликнуть на *отправить код*
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible'); // проверить наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверить что бы крестик был видимый
        })
    it('Правильный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввести емейл
        cy.get('#pass').type('iLoveqastudiя'); // ввести неправильный пароль
        cy.get('#loginButton').click(); // нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible'); // проверить наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверить что бы крестик был видимый
        })
    it('НЕправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('evgeniy@dolnikov.ru'); // ввести емейл
        cy.get('#pass').type('iLoveqastudio1'); // ввести пароль
        cy.get('#loginButton').click(); // нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible'); // проверить наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверить что бы крестик был видимый
        })
    it('логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввести емейл без @
        cy.get('#pass').type('iLoveqastudio1'); // ввести пароль
        cy.get('#loginButton').click(); // нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible'); // проверить наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверить что бы крестик был видимый
        })
    it('Правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввести емейл 
        cy.get('#pass').type('iLoveqastudi'); // ввести пароль
        cy.get('#loginButton').click(); // нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible'); // проверить наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверить что бы крестик был видимый
        })
})
