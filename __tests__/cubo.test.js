import Cubo from "../model/Cubo.js";
describe("Testes da classe Cubo", ()=>{
    test("Teste da área total do cubo", ()=>{
        const aresta = 4;
        const areaTotalEsperada = 6 * Math.pow(aresta,2)
        const cubo = new Cubo(aresta)

        expect(cubo.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada,2)
    })
    test("Teste do volume", ()=>{
        const aresta = 4
        const volumeEsperado = Math.pow(aresta,3)
        const cubo = new Cubo

        expect(cubo.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })
})