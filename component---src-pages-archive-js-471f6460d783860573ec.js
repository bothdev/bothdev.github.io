(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    nRki: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'pageQuery', function () {
          return x;
        });
      var a = n('q1tI'),
        r = n.n(a),
        l = n('TJpk'),
        i = n('nLfd'),
        c = n('20nU'),
        o = n('Kvkj'),
        m = n('g67X'),
        s = n('vOnD'),
        u = n('InJ6');
      function f() {
        var e = b(['\n        font-size: ', ';\n      ']);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = b(['\n      padding: 10px;\n    ']);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = b(['\n      display: none;\n    ']);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = b(['\n    margin: 100px -10px;\n  ']);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function b(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var g = u.h.colors,
        E = u.h.fonts,
        v = u.h.fontSizes,
        y = Object(s.c)(u.d).withConfig({
          displayName: 'archive__StyledMainContainer',
          componentId: 'm3t4e8-0',
        })(['']),
        k = s.c.div.withConfig({
          displayName: 'archive__StyledTableContainer',
          componentId: 'm3t4e8-1',
        })(['margin:100px -20px;', ';'], u.f.tablet(p())),
        w = s.c.table.withConfig({ displayName: 'archive__StyledTable', componentId: 'm3t4e8-2' })(
          [
            'width:100%;border-collapse:collapse;.hide-on-mobile{',
            ';}tbody tr{transition:',
            ';&:hover,&:focus{background-color:',
            ';}}th,td{cursor:default;line-height:1.5;padding:10px 20px;',
            ';}th{text-align:left;}td{&.year{width:10%;',
            ';}&.title{padding-top:15px;color:',
            ';font-size:',
            ';font-weight:700;}&.company{width:15%;padding-top:15px;font-size:',
            ';}&.tech{font-size:',
            ';font-family:',
            ';.separator{margin:0 5px;}span{display:inline-block;}}&.links{span{display:flex;align-items:center;a{',
            ';}a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}',
          ],
          u.f.tablet(d()),
          u.h.transition,
          g.lightNavy,
          u.f.tablet(h()),
          u.f.tablet(f(), v.sm),
          g.lightestSlate,
          v.xl,
          v.lg,
          v.xs,
          E.SFMono,
          u.g.flexCenter,
        );
      t.default = function (e) {
        var t = e.location,
          n = e.data.allMarkdownRemark.edges,
          s = Object(a.useRef)(null),
          u = Object(a.useRef)(null),
          f = Object(a.useRef)([]);
        return (
          Object(a.useEffect)(function () {
            i.a.reveal(s.current, Object(c.srConfig)()),
              i.a.reveal(u.current, Object(c.srConfig)()),
              f.current.forEach(function (e, t) {
                return i.a.reveal(e, Object(c.srConfig)(10 * t));
              });
          }, []),
          r.a.createElement(
            o.i,
            { location: t },
            r.a.createElement(
              l.Helmet,
              null,
              r.a.createElement('title', null, 'Archive | Vorreakboth Chhoeurn'),
              r.a.createElement('link', {
                rel: 'canonical',
                href: 'https://brittanychiang.com/archive',
              }),
            ),
            r.a.createElement(
              y,
              null,
              r.a.createElement(
                'header',
                { ref: s },
                r.a.createElement('h1', { className: 'big-title' }, 'Archive'),
                r.a.createElement(
                  'p',
                  { className: 'subtitle' },
                  'A big list of things I’ve worked on',
                ),
              ),
              r.a.createElement(
                k,
                { ref: u },
                r.a.createElement(
                  w,
                  null,
                  r.a.createElement(
                    'thead',
                    null,
                    r.a.createElement(
                      'tr',
                      null,
                      r.a.createElement('th', null, 'Year'),
                      r.a.createElement('th', null, 'Title'),
                      r.a.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      r.a.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      r.a.createElement('th', null, 'Link'),
                    ),
                  ),
                  r.a.createElement(
                    'tbody',
                    null,
                    n.length > 0 &&
                      n.map(function (e, t) {
                        var n = e.node.frontmatter,
                          a = n.date,
                          l = n.github,
                          i = n.external,
                          c = n.title,
                          o = n.tech,
                          s = n.company;
                        return r.a.createElement(
                          'tr',
                          {
                            key: t,
                            ref: function (e) {
                              return (f.current[t] = e);
                            },
                          },
                          r.a.createElement(
                            'td',
                            { className: 'overline year' },
                            '' + new Date(a).getFullYear(),
                          ),
                          r.a.createElement('td', { className: 'title' }, c),
                          r.a.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            s
                              ? r.a.createElement('span', null, s)
                              : r.a.createElement('span', null, '—'),
                          ),
                          r.a.createElement(
                            'td',
                            { className: 'tech hide-on-mobile' },
                            o.length > 0 &&
                              o.map(function (e, t) {
                                return r.a.createElement(
                                  'span',
                                  { key: t },
                                  e,
                                  '',
                                  t !== o.length - 1 &&
                                    r.a.createElement('span', { className: 'separator' }, '·'),
                                );
                              }),
                          ),
                          r.a.createElement(
                            'td',
                            { className: 'links' },
                            r.a.createElement(
                              'span',
                              null,
                              i &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: i,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'External Link',
                                  },
                                  r.a.createElement(m.a, { name: 'External' }),
                                ),
                              l &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: l,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'GitHub Link',
                                  },
                                  r.a.createElement(m.a, { name: 'GitHub' }),
                                ),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
      var x = '2998431154';
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-471f6460d783860573ec.js.map
