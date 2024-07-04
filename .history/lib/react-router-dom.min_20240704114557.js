!(function (t, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? n(exports, require('react'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react'], n)
    : n((t.ReactRouterDOM = {}), t.React)
})(this, function (t, c) {
  'use strict'
  var g = 'default' in c ? c.default : c,
    u =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {}
  function n(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, 'default')
      ? t.default
      : t
  }
  function e(t, n) {
    return t((n = { exports: {} }), n.exports), n.exports
  }
  var r = Object.getOwnPropertySymbols,
    o = Object.prototype.hasOwnProperty,
    i = Object.prototype.propertyIsEnumerable
  !(function () {
    try {
      if (!Object.assign) return !1
      var t = new String('abc')
      if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1
      for (var n = {}, e = 0; e < 10; e++) n['_' + String.fromCharCode(e)] = e
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(n)
          .map(function (t) {
            return n[t]
          })
          .join('')
      )
        return !1
      var r = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (t) {
          r[t] = t
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
      )
    } catch (t) {
      return !1
    }
  })() || Object.assign
  function a() {}
  var s = e(function (t) {
      t.exports = (function () {
        function t(t, n, e, r, o, i) {
          if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== i) {
            var a = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            )
            throw ((a.name = 'Invariant Violation'), a)
          }
        }
        function n() {
          return t
        }
        var e = {
          array: (t.isRequired = t),
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: n,
          element: t,
          instanceOf: n,
          node: t,
          objectOf: n,
          oneOf: n,
          oneOfType: n,
          shape: n,
          exact: n,
        }
        return (e.checkPropTypes = a), (e.PropTypes = e)
      })()
    }),
    f = '__global_unique_id__'
  function l(t, n, e) {
    return (
      n in t
        ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[n] = e),
      t
    )
  }
  function p(t, n) {
    ;(t.prototype = Object.create(n.prototype)),
      ((t.prototype.constructor = t).__proto__ = n)
  }
  function h(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return t
  }
  var d = 1073741823
  var v =
    g.createContext ||
    function (e, i) {
      var t,
        n,
        r = '__create-react-context-' + (u[f] = (u[f] || 0) + 1) + '__',
        o = (function (o) {
          function t() {
            for (
              var t, n = arguments.length, e = new Array(n), r = 0;
              r < n;
              r++
            )
              e[r] = arguments[r]
            return (
              l(
                h((t = o.call.apply(o, [this].concat(e)) || this)),
                'emitter',
                (function (e) {
                  var r = []
                  return {
                    on: function (t) {
                      r.push(t)
                    },
                    off: function (n) {
                      r = r.filter(function (t) {
                        return t !== n
                      })
                    },
                    get: function () {
                      return e
                    },
                    set: function (t, n) {
                      ;(e = t),
                        r.forEach(function (t) {
                          return t(e, n)
                        })
                    },
                  }
                })(t.props.value)
              ),
              t
            )
          }
          p(t, o)
          var n = t.prototype
          return (
            (n.getChildContext = function () {
              var t
              return ((t = {})[r] = this.emitter), t
            }),
            (n.componentWillReceiveProps = function (t) {
              if (this.props.value !== t.value) {
                var n,
                  e = this.props.value,
                  r = t.value
                !(function (t, n) {
                  return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n
                })(e, r)
                  ? ((n = 'function' == typeof i ? i(e, r) : d),
                    0 != (n |= 0) && this.emitter.set(t.value, n))
                  : (n = 0)
              }
            }),
            (n.render = function () {
              return this.props.children
            }),
            t
          )
        })(c.Component)
      l(o, 'childContextTypes', (((t = {})[r] = s.object.isRequired), t))
      var a = (function (o) {
        function t() {
          for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]
          return (
            l(
              h((e = o.call.apply(o, [this].concat(n)) || this)),
              'observedBits',
              void 0
            ),
            l(h(e), 'state', { value: e.getValue() }),
            l(h(e), 'onUpdate', function (t, n) {
              0 != ((0 | e.observedBits) & n) &&
                e.setState({ value: e.getValue() })
            }),
            e
          )
        }
        p(t, o)
        var n = t.prototype
        return (
          (n.componentWillReceiveProps = function (t) {
            var n = t.observedBits
            this.observedBits = null == n ? d : n
          }),
          (n.componentDidMount = function () {
            this.context[r] && this.context[r].on(this.onUpdate)
            var t = this.props.observedBits
            this.observedBits = null == t ? d : t
          }),
          (n.componentWillUnmount = function () {
            this.context[r] && this.context[r].off(this.onUpdate)
          }),
          (n.getValue = function () {
            return this.context[r] ? this.context[r].get() : e
          }),
          (n.render = function () {
            return (function (t) {
              return Array.isArray(t) ? t[0] : t
            })(this.props.children)(this.state.value)
          }),
          t
        )
      })(c.Component)
      return (
        l(a, 'contextTypes', (((n = {})[r] = s.object), n)),
        { Provider: o, Consumer: a }
      )
    }
  function y(t, n) {
    ;(t.prototype = Object.create(n.prototype)),
      ((t.prototype.constructor = t).__proto__ = n)
  }
  function m() {
    return (m =
      Object.assign ||
      function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = arguments[n]
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }
        return t
      }).apply(this, arguments)
  }
  function b(t) {
    return '/' === t.charAt(0)
  }
  function w(t, n) {
    for (var e = n, r = e + 1, o = t.length; r < o; e += 1, r += 1) t[e] = t[r]
    t.pop()
  }
  var O =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
  var x = 'Invariant failed'
  function P(t, n) {
    if (!t) throw new Error(x)
  }
  function E(t) {
    var n = t.pathname,
      e = t.search,
      r = t.hash,
      o = n || '/'
    return (
      e && '?' !== e && (o += '?' === e.charAt(0) ? e : '?' + e),
      r && '#' !== r && (o += '#' === r.charAt(0) ? r : '#' + r),
      o
    )
  }
  function C(t, n, e, r) {
    var o
    'string' == typeof t
      ? ((o = (function (t) {
          var n = t || '/',
            e = '',
            r = '',
            o = n.indexOf('#')
          ;-1 !== o && ((r = n.substr(o)), (n = n.substr(0, o)))
          var i = n.indexOf('?')
          return (
            -1 !== i && ((e = n.substr(i)), (n = n.substr(0, i))),
            {
              pathname: n,
              search: '?' === e ? '' : e,
              hash: '#' === r ? '' : r,
            }
          )
        })(t)).state = n)
      : (void 0 === (o = m({}, t)).pathname && (o.pathname = ''),
        o.search
          ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search)
          : (o.search = ''),
        o.hash
          ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash)
          : (o.hash = ''),
        void 0 !== n && void 0 === o.state && (o.state = n))
    try {
      o.pathname = decodeURI(o.pathname)
    } catch (t) {
      throw t instanceof URIError
        ? new URIError(
            'Pathname "' +
              o.pathname +
              '" could not be decoded. This is likely caused by an invalid percent-encoding.'
          )
        : t
    }
    return (
      e && (o.key = e),
      r
        ? o.pathname
          ? '/' !== o.pathname.charAt(0) &&
            (o.pathname = (function (t) {
              var n =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : '',
                e = (t && t.split('/')) || [],
                r = (n && n.split('/')) || [],
                o = t && b(t),
                i = n && b(n),
                a = o || i
              if (
                (t && b(t) ? (r = e) : e.length && (r.pop(), (r = r.concat(e))),
                !r.length)
              )
                return '/'
              var c = void 0
              if (r.length) {
                var u = r[r.length - 1]
                c = '.' === u || '..' === u || '' === u
              } else c = !1
              for (var s = 0, f = r.length; 0 <= f; f--) {
                var l = r[f]
                '.' === l
                  ? w(r, f)
                  : '..' === l
                  ? (w(r, f), s++)
                  : s && (w(r, f), s--)
              }
              if (!a) for (; s--; s) r.unshift('..')
              !a || '' === r[0] || (r[0] && b(r[0])) || r.unshift('')
              var p = r.join('/')
              return c && '/' !== p.substr(-1) && (p += '/'), p
            })(o.pathname, r.pathname))
          : (o.pathname = r.pathname)
        : o.pathname || (o.pathname = '/'),
      o
    )
  }
  function S(t, n) {
    return (
      t.pathname === n.pathname &&
      t.search === n.search &&
      t.hash === n.hash &&
      t.key === n.key &&
      (function e(n, r) {
        if (n === r) return !0
        if (null == n || null == r) return !1
        if (Array.isArray(n))
          return (
            Array.isArray(r) &&
            n.length === r.length &&
            n.every(function (t, n) {
              return e(t, r[n])
            })
          )
        var t = void 0 === n ? 'undefined' : O(n)
        if (t !== (void 0 === r ? 'undefined' : O(r))) return !1
        if ('object' !== t) return !1
        var o = n.valueOf(),
          i = r.valueOf()
        if (o !== n || i !== r) return e(o, i)
        var a = Object.keys(n),
          c = Object.keys(r)
        return (
          a.length === c.length &&
          a.every(function (t) {
            return e(n[t], r[t])
          })
        )
      })(t.state, n.state)
    )
  }
  'undefined' != typeof window &&
    window.document &&
    window.document.createElement
  function k(t, n, e) {
    return Math.min(Math.max(t, n), e)
  }
  function j(t) {
    void 0 === t && (t = {})
    var n = t,
      o = n.getUserConfirmation,
      e = n.initialEntries,
      r = void 0 === e ? ['/'] : e,
      i = n.initialIndex,
      a = void 0 === i ? 0 : i,
      c = n.keyLength,
      u = void 0 === c ? 6 : c,
      s = (function () {
        var i = null,
          r = []
        return {
          setPrompt: function (t) {
            return (
              (i = t),
              function () {
                i === t && (i = null)
              }
            )
          },
          confirmTransitionTo: function (t, n, e, r) {
            if (null != i) {
              var o = 'function' == typeof i ? i(t, n) : i
              'string' == typeof o
                ? 'function' == typeof e
                  ? e(o, r)
                  : r(!0)
                : r(!1 !== o)
            } else r(!0)
          },
          appendListener: function (t) {
            var n = !0
            function e() {
              n && t.apply(void 0, arguments)
            }
            return (
              r.push(e),
              function () {
                ;(n = !1),
                  (r = r.filter(function (t) {
                    return t !== e
                  }))
              }
            )
          },
          notifyListeners: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e]
            r.forEach(function (t) {
              return t.apply(void 0, n)
            })
          },
        }
      })()
    function f(t) {
      m(y, t),
        (y.length = y.entries.length),
        s.notifyListeners(y.location, y.action)
    }
    function l() {
      return Math.random().toString(36).substr(2, u)
    }
    var p = k(a, 0, r.length - 1),
      h = r.map(function (t) {
        return C(t, void 0, 'string' == typeof t ? l() : t.key || l())
      }),
      d = E
    function v(t) {
      var n = k(y.index + t, 0, y.entries.length - 1),
        e = y.entries[n]
      s.confirmTransitionTo(e, 'POP', o, function (t) {
        t ? f({ action: 'POP', location: e, index: n }) : f()
      })
    }
    var y = {
      length: h.length,
      action: 'POP',
      location: h[p],
      index: p,
      entries: h,
      createHref: d,
      push: function (t, n) {
        var r = C(t, n, l(), y.location)
        s.confirmTransitionTo(r, 'PUSH', o, function (t) {
          if (t) {
            var n = y.index + 1,
              e = y.entries.slice(0)
            e.length > n ? e.splice(n, e.length - n, r) : e.push(r),
              f({ action: 'PUSH', location: r, index: n, entries: e })
          }
        })
      },
      replace: function (t, n) {
        var e = 'REPLACE',
          r = C(t, n, l(), y.location)
        s.confirmTransitionTo(r, e, o, function (t) {
          t && ((y.entries[y.index] = r), f({ action: e, location: r }))
        })
      },
      go: v,
      goBack: function () {
        v(-1)
      },
      goForward: function () {
        v(1)
      },
      canGo: function (t) {
        var n = y.index + t
        return 0 <= n && n < y.entries.length
      },
      block: function (t) {
        return void 0 === t && (t = !1), s.setPrompt(t)
      },
      listen: function (t) {
        return s.appendListener(t)
      },
    }
    return y
  }
  function T(t, n) {
    return F($(t, n))
  }
  var A =
      Array.isArray ||
      function (t) {
        return '[object Array]' == Object.prototype.toString.call(t)
      },
    R = V,
    _ = $,
    M = F,
    U = D,
    L = new RegExp(
      [
        '(\\\\.)',
        '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
      ].join('|'),
      'g'
    )
  function $(t, n) {
    for (
      var e, r, o = [], i = 0, a = 0, c = '', u = (n && n.delimiter) || '/';
      null != (e = L.exec(t));

    ) {
      var s = e[0],
        f = e[1],
        l = e.index
      if (((c += t.slice(a, l)), (a = l + s.length), f)) c += f[1]
      else {
        var p = t[a],
          h = e[2],
          d = e[3],
          v = e[4],
          y = e[5],
          m = e[6],
          g = e[7]
        c && (o.push(c), (c = ''))
        var b = null != h && null != p && p !== h,
          w = '+' === m || '*' === m,
          O = '?' === m || '*' === m,
          x = e[2] || u,
          P = v || y
        o.push({
          name: d || i++,
          prefix: h || '',
          delimiter: x,
          optional: O,
          repeat: w,
          partial: b,
          asterisk: !!g,
          pattern: P
            ? ((r = P), r.replace(/([=!:$\/()])/g, '\\$1'))
            : g
            ? '.*'
            : '[^' + N(x) + ']+?',
        })
      }
    }
    return a < t.length && (c += t.substr(a)), c && o.push(c), o
  }
  function I(t) {
    return encodeURI(t).replace(/[\/?#]/g, function (t) {
      return '%' + t.charCodeAt(0).toString(16).toUpperCase()
    })
  }
  function F(f) {
    for (var l = new Array(f.length), t = 0; t < f.length; t++)
      'object' == typeof f[t] &&
        (l[t] = new RegExp('^(?:' + f[t].pattern + ')$'))
    return function (t, n) {
      for (
        var e = '',
          r = t || {},
          o = (n || {}).pretty ? I : encodeURIComponent,
          i = 0;
        i < f.length;
        i++
      ) {
        var a = f[i]
        if ('string' != typeof a) {
          var c,
            u = r[a.name]
          if (null == u) {
            if (a.optional) {
              a.partial && (e += a.prefix)
              continue
            }
            throw new TypeError('Expected "' + a.name + '" to be defined')
          }
          if (A(u)) {
            if (!a.repeat)
              throw new TypeError(
                'Expected "' +
                  a.name +
                  '" to not repeat, but received `' +
                  JSON.stringify(u) +
                  '`'
              )
            if (0 === u.length) {
              if (a.optional) continue
              throw new TypeError('Expected "' + a.name + '" to not be empty')
            }
            for (var s = 0; s < u.length; s++) {
              if (((c = o(u[s])), !l[i].test(c)))
                throw new TypeError(
                  'Expected all "' +
                    a.name +
                    '" to match "' +
                    a.pattern +
                    '", but received `' +
                    JSON.stringify(c) +
                    '`'
                )
              e += (0 === s ? a.prefix : a.delimiter) + c
            }
          } else {
            if (
              ((c = a.asterisk
                ? encodeURI(u).replace(/[?#]/g, function (t) {
                    return '%' + t.charCodeAt(0).toString(16).toUpperCase()
                  })
                : o(u)),
              !l[i].test(c))
            )
              throw new TypeError(
                'Expected "' +
                  a.name +
                  '" to match "' +
                  a.pattern +
                  '", but received "' +
                  c +
                  '"'
              )
            e += a.prefix + c
          }
        } else e += a
      }
      return e
    }
  }
  function N(t) {
    return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
  }
  function B(t, n) {
    return (t.keys = n), t
  }
  function H(t) {
    return t.sensitive ? '' : 'i'
  }
  function D(t, n, e) {
    A(n) || ((e = n || e), (n = []))
    for (
      var r = (e = e || {}).strict, o = !1 !== e.end, i = '', a = 0;
      a < t.length;
      a++
    ) {
      var c = t[a]
      if ('string' == typeof c) i += N(c)
      else {
        var u = N(c.prefix),
          s = '(?:' + c.pattern + ')'
        n.push(c),
          c.repeat && (s += '(?:' + u + s + ')*'),
          (i += s =
            c.optional
              ? c.partial
                ? u + '(' + s + ')?'
                : '(?:' + u + '(' + s + '))?'
              : u + '(' + s + ')')
      }
    }
    var f = N(e.delimiter || '/'),
      l = i.slice(-f.length) === f
    return (
      r || (i = (l ? i.slice(0, -f.length) : i) + '(?:' + f + '(?=$))?'),
      (i += o ? '$' : r && l ? '' : '(?=' + f + '|$)'),
      B(new RegExp('^' + i, H(e)), n)
    )
  }
  function V(t, n, e) {
    return (
      A(n) || ((e = n || e), (n = [])),
      (e = e || {}),
      t instanceof RegExp
        ? (function (t, n) {
            var e = t.source.match(/\((?!\?)/g)
            if (e)
              for (var r = 0; r < e.length; r++)
                n.push({
                  name: r,
                  prefix: null,
                  delimiter: null,
                  optional: !1,
                  repeat: !1,
                  partial: !1,
                  asterisk: !1,
                  pattern: null,
                })
            return B(t, n)
          })(t, n)
        : A(t)
        ? (function (t, n, e) {
            for (var r = [], o = 0; o < t.length; o++)
              r.push(V(t[o], n, e).source)
            return B(new RegExp('(?:' + r.join('|') + ')', H(e)), n)
          })(t, n, e)
        : (function (t, n, e) {
            return D($(t, e), n, e)
          })(t, n, e)
    )
  }
  ;(R.parse = _),
    (R.compile = T),
    (R.tokensToFunction = M),
    (R.tokensToRegExp = U)
  var q = e(function (t, n) {
    Object.defineProperty(n, '__esModule', { value: !0 })
    var e = 'function' == typeof Symbol && Symbol.for,
      r = e ? Symbol.for('react.element') : 60103,
      o = e ? Symbol.for('react.portal') : 60106,
      i = e ? Symbol.for('react.fragment') : 60107,
      a = e ? Symbol.for('react.strict_mode') : 60108,
      c = e ? Symbol.for('react.profiler') : 60114,
      u = e ? Symbol.for('react.provider') : 60109,
      s = e ? Symbol.for('react.context') : 60110,
      f = e ? Symbol.for('react.concurrent_mode') : 60111,
      l = e ? Symbol.for('react.forward_ref') : 60112,
      p = e ? Symbol.for('react.suspense') : 60113,
      h = e ? Symbol.for('react.memo') : 60115,
      d = e ? Symbol.for('react.lazy') : 60116
    function v(t) {
      if ('object' == typeof t && null !== t) {
        var n = t.$$typeof
        switch (n) {
          case r:
            switch ((t = t.type)) {
              case f:
              case i:
              case c:
              case a:
                return t
              default:
                switch ((t = t && t.$$typeof)) {
                  case s:
                  case l:
                  case u:
                    return t
                  default:
                    return n
                }
            }
          case o:
            return n
        }
      }
    }
    function y(t) {
      return v(t) === f
    }
    ;(n.typeOf = v),
      (n.AsyncMode = f),
      (n.ConcurrentMode = f),
      (n.ContextConsumer = s),
      (n.ContextProvider = u),
      (n.Element = r),
      (n.ForwardRef = l),
      (n.Fragment = i),
      (n.Profiler = c),
      (n.Portal = o),
      (n.StrictMode = a),
      (n.isValidElementType = function (t) {
        return (
          'string' == typeof t ||
          'function' == typeof t ||
          t === i ||
          t === f ||
          t === c ||
          t === a ||
          t === p ||
          ('object' == typeof t &&
            null !== t &&
            (t.$$typeof === d ||
              t.$$typeof === h ||
              t.$$typeof === u ||
              t.$$typeof === s ||
              t.$$typeof === l))
        )
      }),
      (n.isAsyncMode = function (t) {
        return y(t)
      }),
      (n.isConcurrentMode = y),
      (n.isContextConsumer = function (t) {
        return v(t) === s
      }),
      (n.isContextProvider = function (t) {
        return v(t) === u
      }),
      (n.isElement = function (t) {
        return 'object' == typeof t && null !== t && t.$$typeof === r
      }),
      (n.isForwardRef = function (t) {
        return v(t) === l
      }),
      (n.isFragment = function (t) {
        return v(t) === i
      }),
      (n.isProfiler = function (t) {
        return v(t) === c
      }),
      (n.isPortal = function (t) {
        return v(t) === o
      }),
      (n.isStrictMode = function (t) {
        return v(t) === a
      })
  })
  n(q)
  q.typeOf,
    q.AsyncMode,
    q.ConcurrentMode,
    q.ContextConsumer,
    q.ContextProvider,
    q.Element,
    q.ForwardRef,
    q.Fragment,
    q.Profiler,
    q.Portal,
    q.StrictMode,
    q.isValidElementType,
    q.isAsyncMode,
    q.isConcurrentMode,
    q.isContextConsumer,
    q.isContextProvider,
    q.isElement,
    q.isForwardRef,
    q.isFragment,
    q.isProfiler,
    q.isPortal,
    q.isStrictMode
  var W = e(function (t, n) {})
  n(W)
  W.typeOf,
    W.AsyncMode,
    W.ConcurrentMode,
    W.ContextConsumer,
    W.ContextProvider,
    W.Element,
    W.ForwardRef,
    W.Fragment,
    W.Profiler,
    W.Portal,
    W.StrictMode,
    W.isValidElementType,
    W.isAsyncMode,
    W.isConcurrentMode,
    W.isContextConsumer,
    W.isContextProvider,
    W.isElement,
    W.isForwardRef,
    W.isFragment,
    W.isProfiler,
    W.isPortal,
    W.isStrictMode
  var K = e(function (t) {
    t.exports = q
  })
  K.isValidElementType
  function J(t, n) {
    if (null == t) return {}
    var e,
      r,
      o = {},
      i = Object.keys(t)
    for (r = 0; r < i.length; r++)
      (e = i[r]), 0 <= n.indexOf(e) || (o[e] = t[e])
    return o
  }
  var Y = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    z = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    G = {}
  G[K.ForwardRef] = { $$typeof: !0, render: !0 }
  var Q = Object.defineProperty,
    X = Object.getOwnPropertyNames,
    Z = Object.getOwnPropertySymbols,
    tt = Object.getOwnPropertyDescriptor,
    nt = Object.getPrototypeOf,
    et = Object.prototype
  var rt = function t(n, e, r) {
      if ('string' == typeof e) return n
      if (et) {
        var o = nt(e)
        o && o !== et && t(n, o, r)
      }
      var i = X(e)
      Z && (i = i.concat(Z(e)))
      for (
        var a = G[n.$$typeof] || Y, c = G[e.$$typeof] || Y, u = 0;
        u < i.length;
        ++u
      ) {
        var s = i[u]
        if (!(z[s] || (r && r[s]) || (c && c[s]) || (a && a[s]))) {
          var f = tt(e, s)
          try {
            Q(n, s, f)
          } catch (t) {}
        }
      }
      return n
    },
    ot = (function (t) {
      var n = v()
      return (n.displayName = t), n
    })('Router'),
    it = (function (e) {
      function t(t) {
        var n
        return (
          ((n = e.call(this, t) || this).state = {
            location: t.history.location,
          }),
          (n._isMounted = !1),
          (n._pendingLocation = null),
          t.staticContext ||
            (n.unlisten = t.history.listen(function (t) {
              n._isMounted
                ? n.setState({ location: t })
                : (n._pendingLocation = t)
            })),
          n
        )
      }
      y(t, e),
        (t.computeRootMatch = function (t) {
          return { path: '/', url: '/', params: {}, isExact: '/' === t }
        })
      var n = t.prototype
      return (
        (n.componentDidMount = function () {
          ;(this._isMounted = !0),
            this._pendingLocation &&
              this.setState({ location: this._pendingLocation })
        }),
        (n.componentWillUnmount = function () {
          this.unlisten && this.unlisten()
        }),
        (n.render = function () {
          return g.createElement(ot.Provider, {
            children: this.props.children || null,
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          })
        }),
        t
      )
    })(g.Component),
    at = (function (o) {
      function t() {
        for (var t, n = arguments.length, e = new Array(n), r = 0; r < n; r++)
          e[r] = arguments[r]
        return (
          ((t = o.call.apply(o, [this].concat(e)) || this).history = j(
            t.props
          )),
          t
        )
      }
      return (
        y(t, o),
        (t.prototype.render = function () {
          return g.createElement(it, {
            history: this.history,
            children: this.props.children,
          })
        }),
        t
      )
    })(g.Component),
    ct = (function (t) {
      function n() {
        return t.apply(this, arguments) || this
      }
      y(n, t)
      var e = n.prototype
      return (
        (e.componentDidMount = function () {
          this.props.onMount && this.props.onMount.call(this, this)
        }),
        (e.componentDidUpdate = function (t) {
          this.props.onUpdate && this.props.onUpdate.call(this, this, t)
        }),
        (e.componentWillUnmount = function () {
          this.props.onUnmount && this.props.onUnmount.call(this, this)
        }),
        (e.render = function () {
          return null
        }),
        n
      )
    })(g.Component)
  var ut = {},
    st = 1e4,
    ft = 0
  function lt(t, n) {
    return (
      void 0 === t && (t = '/'),
      void 0 === n && (n = {}),
      '/' === t
        ? t
        : (function (t) {
            if (ut[t]) return ut[t]
            var n = R.compile(t)
            return ft < st && ((ut[t] = n), ft++), n
          })(t)(n, { pretty: !0 })
    )
  }
  var pt = {},
    ht = 1e4,
    dt = 0
  function vt(s, t) {
    void 0 === t && (t = {}), 'string' == typeof t && (t = { path: t })
    var n = t,
      e = n.path,
      r = n.exact,
      f = void 0 !== r && r,
      o = n.strict,
      l = void 0 !== o && o,
      i = n.sensitive,
      p = void 0 !== i && i
    return [].concat(e).reduce(function (t, n) {
      if (!n) return null
      if (t) return t
      var e = (function (t, n) {
          var e = '' + n.end + n.strict + n.sensitive,
            r = pt[e] || (pt[e] = {})
          if (r[t]) return r[t]
          var o = [],
            i = { regexp: R(t, o, n), keys: o }
          return dt < ht && ((r[t] = i), dt++), i
        })(n, { end: f, strict: l, sensitive: p }),
        r = e.regexp,
        o = e.keys,
        i = r.exec(s)
      if (!i) return null
      var a = i[0],
        c = i.slice(1),
        u = s === a
      return f && !u
        ? null
        : {
            path: n,
            url: '/' === n && '' === a ? '/' : a,
            isExact: u,
            params: o.reduce(function (t, n, e) {
              return (t[n.name] = c[e]), t
            }, {}),
          }
    }, null)
  }
  var yt = (function (t) {
    function n() {
      return t.apply(this, arguments) || this
    }
    return (
      y(n, t),
      (n.prototype.render = function () {
        var c = this
        return g.createElement(ot.Consumer, null, function (t) {
          t || P(!1)
          var n = c.props.location || t.location,
            e = m({}, t, {
              location: n,
              match: c.props.computedMatch
                ? c.props.computedMatch
                : c.props.path
                ? vt(n.pathname, c.props)
                : t.match,
            }),
            r = c.props,
            o = r.children,
            i = r.component,
            a = r.render
          return (
            Array.isArray(o) && 0 === o.length && (o = null),
            'function' == typeof o && void 0 === (o = o(e)) && (o = null),
            g.createElement(
              ot.Provider,
              { value: e },
              o &&
                !(function (t) {
                  return 0 === g.Children.count(t)
                })(o)
                ? o
                : e.match
                ? i
                  ? g.createElement(i, e)
                  : a
                  ? a(e)
                  : null
                : null
            )
          )
        })
      }),
      n
    )
  })(g.Component)
  function mt(t) {
    return '/' === t.charAt(0) ? t : '/' + t
  }
  function gt(t) {
    return 'string' == typeof t ? t : E(t)
  }
  function bt(t) {
    return function () {
      P(!1)
    }
  }
  function wt() {}
  var Ot = (function (o) {
      function t() {
        for (var n, t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r]
        return (
          ((n = o.call.apply(o, [this].concat(e)) || this).handlePush =
            function (t) {
              return n.navigateTo(t, 'PUSH')
            }),
          (n.handleReplace = function (t) {
            return n.navigateTo(t, 'REPLACE')
          }),
          (n.handleListen = function () {
            return wt
          }),
          (n.handleBlock = function () {
            return wt
          }),
          n
        )
      }
      y(t, o)
      var n = t.prototype
      return (
        (n.navigateTo = function (t, n) {
          var e = this.props,
            r = e.basename,
            o = void 0 === r ? '' : r,
            i = e.context,
            a = void 0 === i ? {} : i
          ;(a.action = n),
            (a.location = (function (t, n) {
              return t ? m({}, n, { pathname: mt(t) + n.pathname }) : n
            })(o, C(t))),
            (a.url = gt(a.location))
        }),
        (n.render = function () {
          var t = this.props,
            n = t.basename,
            e = void 0 === n ? '' : n,
            r = t.context,
            o = void 0 === r ? {} : r,
            i = t.location,
            a = void 0 === i ? '/' : i,
            c = J(t, ['basename', 'context', 'location']),
            u = {
              createHref: function (t) {
                return mt(e + gt(t))
              },
              action: 'POP',
              location: (function (t, n) {
                if (!t) return n
                var e = mt(t)
                return 0 !== n.pathname.indexOf(e)
                  ? n
                  : m({}, n, { pathname: n.pathname.substr(e.length) })
              })(e, C(a)),
              push: this.handlePush,
              replace: this.handleReplace,
              go: bt(),
              goBack: bt(),
              goForward: bt(),
              listen: this.handleListen,
              block: this.handleBlock,
            }
          return g.createElement(it, m({}, c, { history: u, staticContext: o }))
        }),
        t
      )
    })(g.Component),
    xt = (function (t) {
      function n() {
        return t.apply(this, arguments) || this
      }
      return (
        y(n, t),
        (n.prototype.render = function () {
          var t = this
          return g.createElement(ot.Consumer, null, function (e) {
            e || P(!1)
            var r,
              o,
              i = t.props.location || e.location
            return (
              g.Children.forEach(t.props.children, function (t) {
                if (null == o && g.isValidElement(t)) {
                  var n = (r = t).props.path || t.props.from
                  o = n ? vt(i.pathname, m({}, t.props, { path: n })) : e.match
                }
              }),
              o ? g.cloneElement(r, { location: i, computedMatch: o }) : null
            )
          })
        }),
        n
      )
    })(g.Component)
  function Pt(t, n) {
    ;(t.prototype = Object.create(n.prototype)),
      ((t.prototype.constructor = t).__proto__ = n)
  }
  function Et() {
    return (Et =
      Object.assign ||
      function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = arguments[n]
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }
        return t
      }).apply(this, arguments)
  }
  function Ct(t) {
    return '/' === t.charAt(0)
  }
  function St(t, n) {
    for (var e = n, r = e + 1, o = t.length; r < o; e += 1, r += 1) t[e] = t[r]
    t.pop()
  }
  var kt =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
  var jt = 'Invariant failed'
  function Tt(t, n) {
    if (!t) throw new Error(jt)
  }
  function At(t) {
    return '/' === t.charAt(0) ? t : '/' + t
  }
  function Rt(t) {
    return '/' === t.charAt(0) ? t.substr(1) : t
  }
  function _t(t, n) {
    return (function (t, n) {
      return new RegExp('^' + n + '(\\/|\\?|#|$)', 'i').test(t)
    })(t, n)
      ? t.substr(n.length)
      : t
  }
  function Mt(t) {
    return '/' === t.charAt(t.length - 1) ? t.slice(0, -1) : t
  }
  function Ut(t) {
    var n = t.pathname,
      e = t.search,
      r = t.hash,
      o = n || '/'
    return (
      e && '?' !== e && (o += '?' === e.charAt(0) ? e : '?' + e),
      r && '#' !== r && (o += '#' === r.charAt(0) ? r : '#' + r),
      o
    )
  }
  function Lt(t, n, e, r) {
    var o
    'string' == typeof t
      ? ((o = (function (t) {
          var n = t || '/',
            e = '',
            r = '',
            o = n.indexOf('#')
          ;-1 !== o && ((r = n.substr(o)), (n = n.substr(0, o)))
          var i = n.indexOf('?')
          return (
            -1 !== i && ((e = n.substr(i)), (n = n.substr(0, i))),
            {
              pathname: n,
              search: '?' === e ? '' : e,
              hash: '#' === r ? '' : r,
            }
          )
        })(t)).state = n)
      : (void 0 === (o = Et({}, t)).pathname && (o.pathname = ''),
        o.search
          ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search)
          : (o.search = ''),
        o.hash
          ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash)
          : (o.hash = ''),
        void 0 !== n && void 0 === o.state && (o.state = n))
    try {
      o.pathname = decodeURI(o.pathname)
    } catch (t) {
      throw t instanceof URIError
        ? new URIError(
            'Pathname "' +
              o.pathname +
              '" could not be decoded. This is likely caused by an invalid percent-encoding.'
          )
        : t
    }
    return (
      e && (o.key = e),
      r
        ? o.pathname
          ? '/' !== o.pathname.charAt(0) &&
            (o.pathname = (function (t) {
              var n =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : '',
                e = (t && t.split('/')) || [],
                r = (n && n.split('/')) || [],
                o = t && Ct(t),
                i = n && Ct(n),
                a = o || i
              if (
                (t && Ct(t)
                  ? (r = e)
                  : e.length && (r.pop(), (r = r.concat(e))),
                !r.length)
              )
                return '/'
              var c = void 0
              if (r.length) {
                var u = r[r.length - 1]
                c = '.' === u || '..' === u || '' === u
              } else c = !1
              for (var s = 0, f = r.length; 0 <= f; f--) {
                var l = r[f]
                '.' === l
                  ? St(r, f)
                  : '..' === l
                  ? (St(r, f), s++)
                  : s && (St(r, f), s--)
              }
              if (!a) for (; s--; s) r.unshift('..')
              !a || '' === r[0] || (r[0] && Ct(r[0])) || r.unshift('')
              var p = r.join('/')
              return c && '/' !== p.substr(-1) && (p += '/'), p
            })(o.pathname, r.pathname))
          : (o.pathname = r.pathname)
        : o.pathname || (o.pathname = '/'),
      o
    )
  }
  function $t(t, n) {
    return (
      t.pathname === n.pathname &&
      t.search === n.search &&
      t.hash === n.hash &&
      t.key === n.key &&
      (function e(n, r) {
        if (n === r) return !0
        if (null == n || null == r) return !1
        if (Array.isArray(n))
          return (
            Array.isArray(r) &&
            n.length === r.length &&
            n.every(function (t, n) {
              return e(t, r[n])
            })
          )
        var t = void 0 === n ? 'undefined' : kt(n)
        if (t !== (void 0 === r ? 'undefined' : kt(r))) return !1
        if ('object' !== t) return !1
        var o = n.valueOf(),
          i = r.valueOf()
        if (o !== n || i !== r) return e(o, i)
        var a = Object.keys(n),
          c = Object.keys(r)
        return (
          a.length === c.length &&
          a.every(function (t) {
            return e(n[t], r[t])
          })
        )
      })(t.state, n.state)
    )
  }
  function It() {
    var i = null
    var r = []
    return {
      setPrompt: function (t) {
        return (
          (i = t),
          function () {
            i === t && (i = null)
          }
        )
      },
      confirmTransitionTo: function (t, n, e, r) {
        if (null != i) {
          var o = 'function' == typeof i ? i(t, n) : i
          'string' == typeof o
            ? 'function' == typeof e
              ? e(o, r)
              : r(!0)
            : r(!1 !== o)
        } else r(!0)
      },
      appendListener: function (t) {
        var n = !0
        function e() {
          n && t.apply(void 0, arguments)
        }
        return (
          r.push(e),
          function () {
            ;(n = !1),
              (r = r.filter(function (t) {
                return t !== e
              }))
          }
        )
      },
      notifyListeners: function () {
        for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
          n[e] = arguments[e]
        r.forEach(function (t) {
          return t.apply(void 0, n)
        })
      },
    }
  }
  var Ft = !(
    'undefined' == typeof window ||
    !window.document ||
    !window.document.createElement
  )
  function Nt(t, n) {
    n(window.confirm(t))
  }
  var Bt = 'popstate',
    Ht = 'hashchange'
  function Dt() {
    try {
      return window.history.state || {}
    } catch (t) {
      return {}
    }
  }
  function Vt(t) {
    void 0 === t && (t = {}), Ft || Tt(!1)
    var c = window.history,
      u = (function () {
        var t = window.navigator.userAgent
        return (
          ((-1 === t.indexOf('Android 2.') &&
            -1 === t.indexOf('Android 4.0')) ||
            -1 === t.indexOf('Mobile Safari') ||
            -1 !== t.indexOf('Chrome') ||
            -1 !== t.indexOf('Windows Phone')) &&
          window.history &&
          'pushState' in window.history
        )
      })(),
      n = !(-1 === window.navigator.userAgent.indexOf('Trident')),
      e = t,
      r = e.forceRefresh,
      s = void 0 !== r && r,
      o = e.getUserConfirmation,
      f = void 0 === o ? Nt : o,
      i = e.keyLength,
      a = void 0 === i ? 6 : i,
      l = t.basename ? Mt(At(t.basename)) : ''
    function p(t) {
      var n = t || {},
        e = n.key,
        r = n.state,
        o = window.location,
        i = o.pathname + o.search + o.hash
      return l && (i = _t(i, l)), Lt(i, r, e)
    }
    function h() {
      return Math.random().toString(36).substr(2, a)
    }
    var d = It()
    function v(t) {
      Et(k, t), (k.length = c.length), d.notifyListeners(k.location, k.action)
    }
    function y(t) {
      !(function (t) {
        void 0 === t.state && navigator.userAgent.indexOf('CriOS')
      })(t) && b(p(t.state))
    }
    function m() {
      b(p(Dt()))
    }
    var g = !1
    function b(n) {
      if (g) (g = !1), v()
      else {
        d.confirmTransitionTo(n, 'POP', f, function (t) {
          t
            ? v({ action: 'POP', location: n })
            : (function (t) {
                var n = k.location,
                  e = O.indexOf(n.key)
                ;-1 === e && (e = 0)
                var r = O.indexOf(t.key)
                ;-1 === r && (r = 0)
                var o = e - r
                o && ((g = !0), P(o))
              })(n)
        })
      }
    }
    var w = p(Dt()),
      O = [w.key]
    function x(t) {
      return l + Ut(t)
    }
    function P(t) {
      c.go(t)
    }
    var E = 0
    function C(t) {
      1 === (E += t) && 1 === t
        ? (window.addEventListener(Bt, y), n && window.addEventListener(Ht, m))
        : 0 === E &&
          (window.removeEventListener(Bt, y),
          n && window.removeEventListener(Ht, m))
    }
    var S = !1
    var k = {
      length: c.length,
      action: 'POP',
      location: w,
      createHref: x,
      push: function (t, n) {
        var a = Lt(t, n, h(), k.location)
        d.confirmTransitionTo(a, 'PUSH', f, function (t) {
          if (t) {
            var n = x(a),
              e = a.key,
              r = a.state
            if (u)
              if ((c.pushState({ key: e, state: r }, null, n), s))
                window.location.href = n
              else {
                var o = O.indexOf(k.location.key),
                  i = O.slice(0, -1 === o ? 0 : o + 1)
                i.push(a.key), (O = i), v({ action: 'PUSH', location: a })
              }
            else window.location.href = n
          }
        })
      },
      replace: function (t, n) {
        var i = 'REPLACE',
          a = Lt(t, n, h(), k.location)
        d.confirmTransitionTo(a, i, f, function (t) {
          if (t) {
            var n = x(a),
              e = a.key,
              r = a.state
            if (u)
              if ((c.replaceState({ key: e, state: r }, null, n), s))
                window.location.replace(n)
              else {
                var o = O.indexOf(k.location.key)
                ;-1 !== o && (O[o] = a.key), v({ action: i, location: a })
              }
            else window.location.replace(n)
          }
        })
      },
      go: P,
      goBack: function () {
        P(-1)
      },
      goForward: function () {
        P(1)
      },
      block: function (t) {
        void 0 === t && (t = !1)
        var n = d.setPrompt(t)
        return (
          S || (C(1), (S = !0)),
          function () {
            return S && ((S = !1), C(-1)), n()
          }
        )
      },
      listen: function (t) {
        var n = d.appendListener(t)
        return (
          C(1),
          function () {
            C(-1), n()
          }
        )
      },
    }
    return k
  }
  var qt = 'hashchange',
    Wt = {
      hashbang: {
        encodePath: function (t) {
          return '!' === t.charAt(0) ? t : '!/' + Rt(t)
        },
        decodePath: function (t) {
          return '!' === t.charAt(0) ? t.substr(1) : t
        },
      },
      noslash: { encodePath: Rt, decodePath: At },
      slash: { encodePath: At, decodePath: At },
    }
  function Kt() {
    var t = window.location.href,
      n = t.indexOf('#')
    return -1 === n ? '' : t.substring(n + 1)
  }
  function Jt(t) {
    var n = window.location.href.indexOf('#')
    window.location.replace(
      window.location.href.slice(0, 0 <= n ? n : 0) + '#' + t
    )
  }
  function Yt(t) {
    void 0 === t && (t = {}), Ft || Tt(!1)
    var n = window.history,
      e = (window.navigator.userAgent.indexOf('Firefox'), t),
      r = e.getUserConfirmation,
      a = void 0 === r ? Nt : r,
      o = e.hashType,
      i = void 0 === o ? 'slash' : o,
      c = t.basename ? Mt(At(t.basename)) : '',
      u = Wt[i],
      s = u.encodePath,
      f = u.decodePath
    function l() {
      var t = f(Kt())
      return c && (t = _t(t, c)), Lt(t)
    }
    var p = It()
    function h(t) {
      Et(C, t), (C.length = n.length), p.notifyListeners(C.location, C.action)
    }
    var d = !1,
      v = null
    function y() {
      var t = Kt(),
        n = s(t)
      if (t !== n) Jt(n)
      else {
        var e = l(),
          r = C.location
        if (!d && $t(r, e)) return
        if (v === Ut(e)) return
        ;(v = null),
          (function (n) {
            if (d) (d = !1), h()
            else {
              p.confirmTransitionTo(n, 'POP', a, function (t) {
                t
                  ? h({ action: 'POP', location: n })
                  : (function (t) {
                      var n = C.location,
                        e = w.lastIndexOf(Ut(n))
                      ;-1 === e && (e = 0)
                      var r = w.lastIndexOf(Ut(t))
                      ;-1 === r && (r = 0)
                      var o = e - r
                      o && ((d = !0), O(o))
                    })(n)
              })
            }
          })(e)
      }
    }
    var m = Kt(),
      g = s(m)
    m !== g && Jt(g)
    var b = l(),
      w = [Ut(b)]
    function O(t) {
      n.go(t)
    }
    var x = 0
    function P(t) {
      1 === (x += t) && 1 === t
        ? window.addEventListener(qt, y)
        : 0 === x && window.removeEventListener(qt, y)
    }
    var E = !1
    var C = {
      length: n.length,
      action: 'POP',
      location: b,
      createHref: function (t) {
        return '#' + s(c + Ut(t))
      },
      push: function (t, n) {
        var i = Lt(t, void 0, void 0, C.location)
        p.confirmTransitionTo(i, 'PUSH', a, function (t) {
          if (t) {
            var n = Ut(i),
              e = s(c + n)
            if (Kt() !== e) {
              ;(v = n),
                (function (t) {
                  window.location.hash = t
                })(e)
              var r = w.lastIndexOf(Ut(C.location)),
                o = w.slice(0, -1 === r ? 0 : r + 1)
              o.push(n), (w = o), h({ action: 'PUSH', location: i })
            } else h()
          }
        })
      },
      replace: function (t, n) {
        var o = 'REPLACE',
          i = Lt(t, void 0, void 0, C.location)
        p.confirmTransitionTo(i, o, a, function (t) {
          if (t) {
            var n = Ut(i),
              e = s(c + n)
            Kt() !== e && ((v = n), Jt(e))
            var r = w.indexOf(Ut(C.location))
            ;-1 !== r && (w[r] = n), h({ action: o, location: i })
          }
        })
      },
      go: O,
      goBack: function () {
        O(-1)
      },
      goForward: function () {
        O(1)
      },
      block: function (t) {
        void 0 === t && (t = !1)
        var n = p.setPrompt(t)
        return (
          E || (P(1), (E = !0)),
          function () {
            return E && ((E = !1), P(-1)), n()
          }
        )
      },
      listen: function (t) {
        var n = p.appendListener(t)
        return (
          P(1),
          function () {
            P(-1), n()
          }
        )
      },
    }
    return C
  }
  var zt = Object.getOwnPropertySymbols,
    Gt = Object.prototype.hasOwnProperty,
    Qt = Object.prototype.propertyIsEnumerable
  !(function () {
    try {
      if (!Object.assign) return !1
      var t = new String('abc')
      if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1
      for (var n = {}, e = 0; e < 10; e++) n['_' + String.fromCharCode(e)] = e
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(n)
          .map(function (t) {
            return n[t]
          })
          .join('')
      )
        return !1
      var r = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (t) {
          r[t] = t
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
      )
    } catch (t) {
      return !1
    }
  })() || Object.assign
  function Xt() {}
  e(function (t) {
    t.exports = (function () {
      function t(t, n, e, r, o, i) {
        if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== i) {
          var a = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          )
          throw ((a.name = 'Invariant Violation'), a)
        }
      }
      function n() {
        return t
      }
      var e = {
        array: (t.isRequired = t),
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: n,
        element: t,
        instanceOf: n,
        node: t,
        objectOf: n,
        oneOf: n,
        oneOfType: n,
        shape: n,
        exact: n,
      }
      return (e.checkPropTypes = Xt), (e.PropTypes = e)
    })()
  })
  var Zt = (function (o) {
      function t() {
        for (var t, n = arguments.length, e = new Array(n), r = 0; r < n; r++)
          e[r] = arguments[r]
        return (
          ((t = o.call.apply(o, [this].concat(e)) || this).history = Vt(
            t.props
          )),
          t
        )
      }
      return (
        Pt(t, o),
        (t.prototype.render = function () {
          return g.createElement(it, {
            history: this.history,
            children: this.props.children,
          })
        }),
        t
      )
    })(g.Component),
    tn = (function (o) {
      function t() {
        for (var t, n = arguments.length, e = new Array(n), r = 0; r < n; r++)
          e[r] = arguments[r]
        return (
          ((t = o.call.apply(o, [this].concat(e)) || this).history = Yt(
            t.props
          )),
          t
        )
      }
      return (
        Pt(t, o),
        (t.prototype.render = function () {
          return g.createElement(it, {
            history: this.history,
            children: this.props.children,
          })
        }),
        t
      )
    })(g.Component)
  function nn(t, n) {
    if (null == t) return {}
    var e,
      r,
      o = {},
      i = Object.keys(t)
    for (r = 0; r < i.length; r++)
      (e = i[r]), 0 <= n.indexOf(e) || (o[e] = t[e])
    return o
  }
  var en = (function (t) {
    function n() {
      return t.apply(this, arguments) || this
    }
    Pt(n, t)
    var e = n.prototype
    return (
      (e.handleClick = function (n, t) {
        try {
          this.props.onClick && this.props.onClick(n)
        } catch (t) {
          throw (n.preventDefault(), t)
        }
        n.defaultPrevented ||
          0 !== n.button ||
          (this.props.target && '_self' !== this.props.target) ||
          (function (t) {
            return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
          })(n) ||
          (n.preventDefault(),
          (this.props.replace ? t.replace : t.push)(this.props.to))
      }),
      (e.render = function () {
        var r = this,
          t = this.props,
          o = t.innerRef,
          i = (t.replace, t.to),
          a = nn(t, ['innerRef', 'replace', 'to'])
        return g.createElement(ot.Consumer, null, function (n) {
          n || Tt(!1)
          var t = 'string' == typeof i ? Lt(i, null, null, n.location) : i,
            e = t ? n.history.createHref(t) : ''
          return g.createElement(
            'a',
            Et({}, a, {
              onClick: function (t) {
                return r.handleClick(t, n.history)
              },
              href: e,
              ref: o,
            })
          )
        })
      }),
      n
    )
  })(g.Component)
  ;(t.BrowserRouter = Zt),
    (t.HashRouter = tn),
    (t.Link = en),
    (t.NavLink = function (t) {
      var n = t['aria-current'],
        a = void 0 === n ? 'page' : n,
        e = t.activeClassName,
        c = void 0 === e ? 'active' : e,
        u = t.activeStyle,
        s = t.className,
        f = t.exact,
        l = t.isActive,
        p = t.location,
        h = t.strict,
        d = t.style,
        v = t.to,
        y = nn(t, [
          'aria-current',
          'activeClassName',
          'activeStyle',
          'className',
          'exact',
          'isActive',
          'location',
          'strict',
          'style',
          'to',
        ]),
        r = 'object' == typeof v ? v.pathname : v,
        m = r && r.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
      return g.createElement(ot.Consumer, null, function (t) {
        t || Tt(!1)
        var n = p ? p.pathname : t.location.pathname,
          e = m ? vt(n, { path: m, exact: f, strict: h }) : null,
          r = !!(l ? l(e, t.location) : e),
          o = r
            ? (function () {
                for (
                  var t = arguments.length, n = new Array(t), e = 0;
                  e < t;
                  e++
                )
                  n[e] = arguments[e]
                return n
                  .filter(function (t) {
                    return t
                  })
                  .join(' ')
              })(s, c)
            : s,
          i = r ? Et({}, d, u) : d
        return g.createElement(
          en,
          Et(
            { 'aria-current': (r && a) || null, className: o, style: i, to: v },
            y
          )
        )
      })
    }),
    (t.MemoryRouter = at),
    (t.Prompt = function (t) {
      var r = t.message,
        n = t.when,
        o = void 0 === n || n
      return g.createElement(ot.Consumer, null, function (t) {
        if ((t || P(!1), !o || t.staticContext)) return null
        var e = t.history.block
        return g.createElement(ct, {
          onMount: function (t) {
            t.release = e(r)
          },
          onUpdate: function (t, n) {
            n.message !== r && (t.release(), (t.release = e(r)))
          },
          onUnmount: function (t) {
            t.release()
          },
          message: r,
        })
      })
    }),
    (t.Redirect = function (t) {
      var i = t.computedMatch,
        a = t.to,
        n = t.push,
        c = void 0 !== n && n
      return g.createElement(ot.Consumer, null, function (t) {
        t || P(!1)
        var n = t.history,
          e = t.staticContext,
          r = c ? n.push : n.replace,
          o = C(
            i
              ? 'string' == typeof a
                ? lt(a, i.params)
                : m({}, a, { pathname: lt(a.pathname, i.params) })
              : a
          )
        return e
          ? (r(o), null)
          : g.createElement(ct, {
              onMount: function () {
                r(o)
              },
              onUpdate: function (t, n) {
                var e = C(n.to)
                S(e, m({}, o, { key: e.key })) || r(o)
              },
              to: a,
            })
      })
    }),
    (t.Route = yt),
    (t.Router = it),
    (t.StaticRouter = Ot),
    (t.Switch = xt),
    (t.generatePath = lt),
    (t.matchPath = vt),
    (t.withRouter = function (r) {
      function t(t) {
        var n = t.wrappedComponentRef,
          e = J(t, ['wrappedComponentRef'])
        return g.createElement(ot.Consumer, null, function (t) {
          return t || P(!1), g.createElement(r, m({}, e, t, { ref: n }))
        })
      }
      var n = 'withRouter(' + (r.displayName || r.name) + ')'
      return (t.displayName = n), (t.WrappedComponent = r), rt(t, r)
    }),
    (t.__RouterContext = ot),
    Object.defineProperty(t, '__esModule', { value: !0 })
})
