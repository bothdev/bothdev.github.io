(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    SqBY: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'pageQuery', function () {
          return I;
        });
      var a = n('q1tI'),
        i = n.n(a),
        o = n('Wbzz'),
        l = n('TJpk'),
        r = n('N1om'),
        d = n.n(r),
        s = n('Kvkj'),
        c = n('g67X'),
        m = n('vOnD'),
        p = n('InJ6');
      function g() {
        var e = (function (e, t) {
          t || (t = e.slice(0));
          return (e.raw = t), e;
        })(['grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));']);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      var f = p.h.colors,
        u = p.h.fontSizes,
        h = p.h.fonts,
        v = Object(m.c)(p.d).withConfig({
          displayName: 'pensieve__StyledMainContainer',
          componentId: 'd5gdo0-0',
        })(
          [
            "& > header{text-align:center;margin-bottom:100px;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",
            ';margin-top:20px;width:100%;}',
          ],
          p.g.flexBetween,
        ),
        w = m.c.div.withConfig({ displayName: 'pensieve__StyledGrid', componentId: 'd5gdo0-1' })(
          [
            'margin-top:50px;.posts{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;',
            ';}',
          ],
          p.f.desktop(g()),
        ),
        x = m.c.div.withConfig({
          displayName: 'pensieve__StyledPostInner',
          componentId: 'd5gdo0-2',
        })(
          [
            '',
            ';',
            ';flex-direction:column;align-items:flex-start;position:relative;padding:2rem 1.75rem;height:100%;border-radius:',
            ';transition:',
            ';background-color:',
            ';header,a{width:100%;}',
          ],
          p.g.boxShadow,
          p.g.flexBetween,
          p.h.borderRadius,
          p.h.transition,
          f.lightNavy,
        ),
        y = m.c.div.withConfig({ displayName: 'pensieve__StyledPost', componentId: 'd5gdo0-3' })(
          [
            'transition:',
            ';cursor:default;&:hover,&:focus{outline:0;',
            '{transform:translateY(-5px);}}',
          ],
          p.h.transition,
          x,
        ),
        E = m.c.div.withConfig({
          displayName: 'pensieve__StyledPostHeader',
          componentId: 'd5gdo0-4',
        })(['', ';margin-bottom:30px;'], p.g.flexBetween),
        _ = m.c.div.withConfig({ displayName: 'pensieve__StyledFolder', componentId: 'd5gdo0-5' })(
          ['color:', ';svg{width:40px;height:40px;}'],
          f.green,
        ),
        S = m.c.h5.withConfig({ displayName: 'pensieve__StyledPostName', componentId: 'd5gdo0-6' })(
          ['margin:0 0 10px;font-size:', ';color:', ';'],
          u.xxl,
          f.lightestSlate,
        ),
        b = m.c.div.withConfig({
          displayName: 'pensieve__StyledPostDescription',
          componentId: 'd5gdo0-7',
        })(['font-size:17px;color:', ';'], f.lightSlate),
        k = m.c.span.withConfig({ displayName: 'pensieve__StyledDate', componentId: 'd5gdo0-8' })(
          ['text-transform:uppercase;font-family:', ';font-size:', ';color:', ';'],
          h.SFMono,
          u.xs,
          f.lightSlate,
        ),
        N = m.c.ul.withConfig({ displayName: 'pensieve__StyledTags', componentId: 'd5gdo0-9' })(
          [
            'display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{font-family:',
            ';font-size:',
            ';color:',
            ';line-height:1.75;margin-right:15px;&:last-of-type{margin-right:0;}a{',
            ';}}',
          ],
          h.SFMono,
          u.xs,
          f.green,
          p.g.inlineLink,
        );
      t.default = function (e) {
        var t = e.location,
          n = e.data.allMarkdownRemark.edges;
        return i.a.createElement(
          s.i,
          { location: t },
          i.a.createElement(
            l.Helmet,
            null,
            i.a.createElement('title', null, 'Pensieve | Vorreakboth Chhoeurn'),
            i.a.createElement('link', {
              rel: 'canonical',
              href: 'https://github.com/yashitanamdeo/pensieve',
            }),
          ),
          i.a.createElement(
            v,
            null,
            i.a.createElement(
              'header',
              null,
              i.a.createElement('h1', { className: 'big-title' }, 'Pensieve'),
              i.a.createElement(
                'p',
                { className: 'subtitle' },
                i.a.createElement(
                  'a',
                  {
                    href: 'https://www.wizardingworld.com/writing-by-jk-rowling/pensieve',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  'a collection of memories',
                ),
              ),
            ),
            i.a.createElement(
              w,
              null,
              i.a.createElement(
                'div',
                { className: 'posts' },
                n.length > 0 &&
                  n.map(function (e, t) {
                    var n = e.node.frontmatter,
                      a = n.title,
                      l = n.description,
                      r = n.slug,
                      s = n.date,
                      m = n.tags,
                      p = new Date(s);
                    return i.a.createElement(
                      y,
                      { key: t, tabIndex: '0' },
                      i.a.createElement(
                        x,
                        null,
                        i.a.createElement(
                          'header',
                          null,
                          i.a.createElement(
                            o.Link,
                            { to: r },
                            i.a.createElement(
                              E,
                              null,
                              i.a.createElement(_, null, i.a.createElement(c.p, null)),
                            ),
                            i.a.createElement(S, null, a),
                            i.a.createElement(b, null, l),
                          ),
                        ),
                        i.a.createElement(
                          'footer',
                          null,
                          i.a.createElement(k, null, '' + p.toLocaleDateString()),
                          i.a.createElement(
                            N,
                            null,
                            m.map(function (e, t) {
                              return i.a.createElement(
                                'li',
                                { key: t },
                                i.a.createElement(
                                  o.Link,
                                  { to: '/pensieve/tags/' + d()(e) + '/' },
                                  '#',
                                  e,
                                ),
                              );
                            }),
                          ),
                        ),
                      ),
                    );
                  }),
              ),
            ),
          ),
        );
      };
      var I = '3292513715';
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-index-js-8558c1245056e21843e9.js.map
