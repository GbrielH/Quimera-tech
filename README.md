# Quimera Tech

Site institucional da Quimera Tech, pronto para publicação no GitHub Pages.

## Abrir no computador

No terminal do VS Code, execute:

```bash
npm install
npm run dev:pages
```

Abra o endereço informado no terminal. Esse comando funciona no Windows,
PowerShell, macOS e Linux.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste projeto para a branch `main`.
3. No repositório, acesse **Settings > Pages**.
4. Em **Build and deployment > Source**, selecione **GitHub Actions**.
5. Aguarde a ação **Publicar no GitHub Pages** terminar.

Depois disso, cada atualização enviada para a branch `main` será publicada
automaticamente.

## Gerar os arquivos manualmente

```bash
npm run build:pages
```

O site pronto será criado na pasta `dist-pages`.

## Contato configurado

- WhatsApp: 11 94934-7449
- E-mail: quimera.techy@gmail.com

Essas informações podem ser alteradas em `app/page.tsx`.

## Selo “Site desenvolvido por Quimera Tech”

O próprio site possui uma seção chamada **Assinatura Quimera**. Após publicar,
clique em **Copiar código do selo**. O endereço correto do site e da logo será
incluído automaticamente no código para você colar no rodapé de outros sites.
