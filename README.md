## before install
please add '.env.local' file in root dir (see '.env.local.example')
its contents will be shared privatly

## Install

```bash
npm i
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes
Top bar navigation has 3 links

 Widgets Page shows all users widgets - clickable
  Widget page shows CommonNinja injectable element (bug: sometimes needs reload to show content)

 Projets Page shows all users projects - clickable
  Project page shows all widgets of the specific project

 Widget Types shows all common ninja widgets (limited by api module to 50 items) - not clickable