
localStorage.setItem("nama", "Ashil")
let showName = name => {
    console.log(localStorage.getItem(name))
    return localStorage.getItem(name);
}

QUnit.module('showName', () => {
    QUnit.test('showingMyNameOnline', function(assert) {
      assert.equal(showName("nama"), "Ashil");
    });
});