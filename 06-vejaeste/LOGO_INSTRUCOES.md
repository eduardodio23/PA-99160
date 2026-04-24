# Instruções para a Logo

## 📍 Onde Colocar a Logo

A logo deve ser colocada na pasta `public/` do seu projeto:

```
06-vejaeste/
├── public/
│   └── logo.png  ← Coloque sua logo aqui
├── src/
└── ...
```

## 🔧 Como Usar a Logo

### 1. **Copie sua imagem de logo para o diretório `public/`**
   - Coloque o arquivo da logo em `public/logo.png` (ou outro formato como `.jpg`, `.svg`)
   - Se usar SVG, é melhor para escalar sem perder qualidade

### 2. **Atualize o componente Header**

O componente Header já está preparado para exibir a logo. A imagem será exibida com:
- Altura de 50px
- Auto-ajuste de largura
- Efeito de sombra suave
- Hover com efeito de escala

Código no Header (`src/Components/Header/index.jsx`):
```jsx
<header .logo img>
    <img src="/logo.png" alt="Logo da Contabilidade" />
</header>
```

### 3. **Recomendações**

- **Tamanho**: Use uma imagem com dimensões mínimas de 200x200px
- **Formato**: PNG (com fundo transparente) ou SVG são ideais
- **Proporção**: Recomenda-se uma proporção quadrada ou retangular
- **Nome do arquivo**: Simplifique para `logo.png` ou `logo.svg`

## 🎨 Tema Frutiger Aero Aplicado

O projeto agora está completamente decorado com o tema **Frutiger Aero** caracterizado por:

- ✨ **Cores vibrantes**: Azul (#0066cc), Laranja (#ff6600), Amarelo (#ffaa00), Ciano (#00ccff)
- 🌊 **Gradientes suaves**: Transições elegantes entre cores
- 📦 **Sombras 3D**: Efeito de profundidade nos elementos
- 🔷 **Formas arredondadas**: Border-radius de 15-25px
- 🌟 **Efeitos de hover**: Movimentos suaves e transformações
- 💫 **Padrões visuais**: Efeitos brilhantes e glow

## 📂 Estrutura de Cores

- **Primária**: Azul Ciano #0066cc → #00ccff
- **Secundária**: Laranja #ff6600 → #ffaa00
- **Destaques**: Amarelo brilhante #ffff99
- **Fundos**: Gradientes leves em tons pastel

Divirta-se customizando seu projeto! 🚀
