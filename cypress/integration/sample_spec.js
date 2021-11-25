describe("萱津ゼミHPテスト", () => {
    it("お問い合わせ内容を送信", () => {
        // URLにアクセス
        cy.visit("http://localhost:3000/contact");

        //氏名を入力
        cy.get("input[type='text']").type("小瀧 爽一郎");

        //問い合わせ内容を入力
        cy.get("textarea[name='message']").type("これはテストです。");

        //入力内容を送信
        cy.get("input[type='submit']").click();
    });
});
