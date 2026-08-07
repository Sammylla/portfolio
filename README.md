# koha_koppepan portfolio

Next.jsとTailwind CSSで構築したポートフォリオサイトです。

## Development

```bash
pnpm install
pnpm dev
```

## Static build

```bash
pnpm build
```

静的ファイルは `out/` に生成されます。`main` ブランチへのpush時にGitHub ActionsからGitHub Pagesへデプロイされます。
