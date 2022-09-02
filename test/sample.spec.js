import assert from 'assert'
import chai from 'chai'

describe ('meu primeiro teste', () => {
    it ('verificar uma igualdade ', () => {
        let aux = 4
        assert.strictEqual (aux, 4)
    })
    it ('verificar uma igualdade',() => {
        let aux = 'papel'
        assert.strictEqual (aux, 'papel')
    })
})
describe ('meu primeiro teste', () => {
    it ('verificar uma igualdade ', () => {
        let aux = 4
        assert.notSrictEqual (aux, 8)
    })
    it ('verificar uma desigualdade',() => {
        let aux = 'maço'
        assert.notSrictEqual (aux, 'folha')
    })
})