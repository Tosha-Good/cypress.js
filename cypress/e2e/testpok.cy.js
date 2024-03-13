describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.me/'); // зайти на сайт
         cy.get(':nth-child(1) > .auth__input').type('toshagood@yandex.ru'); // ввести логин
         cy.get('#password').type('rBp-DSt-6L3-bvg'); // ввести пароль
         cy.get('.auth__button').click(); // нажать *войти*
         cy.get('.header__btns > [href="/shop"]').click(); // клинуть *магазин*
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // выбираем рандомный ава
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4211110954543884'); // вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0826'); // вводим дату годности карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим cvc
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Anton Khodykin'); // вводим ФИО
         cy.get('.pay-btn').click(); // клик *оплатить
         cy.get('#cardnumber').type('56456'); // код из смс
         cy.get('.payment__submit-button').click(); // клик *отправить*
         cy.get('.payment__adv').click(); // клик вернуться в магазин
     })
 })