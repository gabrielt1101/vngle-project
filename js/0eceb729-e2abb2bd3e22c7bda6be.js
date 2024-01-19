"use strict";
(self.webpackChunkvngle_site = self.webpackChunkvngle_site || []).push([
  [3631],
  {
    94637: function (e, n, t) {
      t.d(n, {
        $M: function () {
          return c;
        },
        BX: function () {
          return d;
        },
        Eb: function () {
          return a;
        },
        US: function () {
          return r;
        },
      });
      var o = t(97582),
        i = t(75882),
        a = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (o) {
              return (
                (t = {
                  "content-type": "application/x-amz-json-1.1",
                  "x-amz-target":
                    "AWSCognitoIdentityService.GetCredentialsForIdentity",
                }),
                (i = JSON.stringify(E(e, n))),
                [2, O(n, t, "/", void 0, i)]
              );
            });
          });
        },
        r = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (o) {
              return (
                (t = {
                  "content-type": "application/x-amz-json-1.1",
                  "x-amz-target": "AWSCognitoIdentityService.GetId",
                }),
                (i = JSON.stringify(I(e, n))),
                [2, O(n, t, "/", void 0, i)]
              );
            });
          });
        },
        c = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i, a;
            return (0, o.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  return e.statusCode >= 300 ? [2, s(e, n)] : [4, T(e.body, n)];
                case 1:
                  return (
                    (t = r.sent()),
                    {},
                    (i = C(t, n)),
                    (a = (0, o.pi)({ $metadata: N(e) }, i)),
                    [2, Promise.resolve(a)]
                  );
              }
            });
          });
        },
        s = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i, a, r, c, s, d, u, y, E, I, $, w, b, C;
            return (0, o.Jh)(this, function (z) {
              switch (z.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (C = {}), [4, T(e.body, n)];
                case 1:
                  switch (
                    ((t = o.pi.apply(
                      void 0,
                      i.concat([((C.body = z.sent()), C)])
                    )),
                    (r = "UnknownError"),
                    (r = q(e, t.body)),
                    r)
                  ) {
                    case "ExternalServiceException":
                    case "com.amazonaws.cognitoidentity#ExternalServiceException":
                      return [3, 2];
                    case "InternalErrorException":
                    case "com.amazonaws.cognitoidentity#InternalErrorException":
                      return [3, 4];
                    case "InvalidIdentityPoolConfigurationException":
                    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
                      return [3, 6];
                    case "InvalidParameterException":
                    case "com.amazonaws.cognitoidentity#InvalidParameterException":
                      return [3, 8];
                    case "NotAuthorizedException":
                    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
                      return [3, 10];
                    case "ResourceConflictException":
                    case "com.amazonaws.cognitoidentity#ResourceConflictException":
                      return [3, 12];
                    case "ResourceNotFoundException":
                    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
                      return [3, 14];
                    case "TooManyRequestsException":
                    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
                      return [3, 16];
                  }
                  return [3, 18];
                case 2:
                  return (c = [{}]), [4, p(t, n)];
                case 3:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, c.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 4:
                  return (s = [{}]), [4, m(t, n)];
                case 5:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, s.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 6:
                  return (d = [{}]), [4, l(t, n)];
                case 7:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, d.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 8:
                  return (u = [{}]), [4, v(t, n)];
                case 9:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, u.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 10:
                  return (y = [{}]), [4, f(t, n)];
                case 11:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, y.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 12:
                  return (E = [{}]), [4, g(t, n)];
                case 13:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, E.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 14:
                  return (I = [{}]), [4, h(t, n)];
                case 15:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, I.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 16:
                  return ($ = [{}]), [4, x(t, n)];
                case 17:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, $.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 18:
                  (w = t.body),
                    (r = w.code || w.Code || r),
                    (a = (0, o.pi)((0, o.pi)({}, w), {
                      name: "" + r,
                      message: w.message || w.Message || r,
                      $fault: "client",
                      $metadata: N(e),
                    })),
                    (z.label = 19);
                case 19:
                  return (
                    (b = a.message || a.Message || r),
                    (a.message = b),
                    delete a.Message,
                    [2, Promise.reject(Object.assign(new Error(b), a))]
                  );
              }
            });
          });
        },
        d = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i, a;
            return (0, o.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  return e.statusCode >= 300 ? [2, u(e, n)] : [4, T(e.body, n)];
                case 1:
                  return (
                    (t = r.sent()),
                    {},
                    (i = z(t, n)),
                    (a = (0, o.pi)({ $metadata: N(e) }, i)),
                    [2, Promise.resolve(a)]
                  );
              }
            });
          });
        },
        u = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i, a, r, c, s, d, u, l, E, I, $, w, b, C;
            return (0, o.Jh)(this, function (z) {
              switch (z.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (C = {}), [4, T(e.body, n)];
                case 1:
                  switch (
                    ((t = o.pi.apply(
                      void 0,
                      i.concat([((C.body = z.sent()), C)])
                    )),
                    (r = "UnknownError"),
                    (r = q(e, t.body)),
                    r)
                  ) {
                    case "ExternalServiceException":
                    case "com.amazonaws.cognitoidentity#ExternalServiceException":
                      return [3, 2];
                    case "InternalErrorException":
                    case "com.amazonaws.cognitoidentity#InternalErrorException":
                      return [3, 4];
                    case "InvalidParameterException":
                    case "com.amazonaws.cognitoidentity#InvalidParameterException":
                      return [3, 6];
                    case "LimitExceededException":
                    case "com.amazonaws.cognitoidentity#LimitExceededException":
                      return [3, 8];
                    case "NotAuthorizedException":
                    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
                      return [3, 10];
                    case "ResourceConflictException":
                    case "com.amazonaws.cognitoidentity#ResourceConflictException":
                      return [3, 12];
                    case "ResourceNotFoundException":
                    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
                      return [3, 14];
                    case "TooManyRequestsException":
                    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
                      return [3, 16];
                  }
                  return [3, 18];
                case 2:
                  return (c = [{}]), [4, p(t, n)];
                case 3:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, c.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 4:
                  return (s = [{}]), [4, m(t, n)];
                case 5:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, s.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 6:
                  return (d = [{}]), [4, v(t, n)];
                case 7:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, d.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 8:
                  return (u = [{}]), [4, y(t, n)];
                case 9:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, u.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 10:
                  return (l = [{}]), [4, f(t, n)];
                case 11:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, l.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 12:
                  return (E = [{}]), [4, g(t, n)];
                case 13:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, E.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 14:
                  return (I = [{}]), [4, h(t, n)];
                case 15:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, I.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 16:
                  return ($ = [{}]), [4, x(t, n)];
                case 17:
                  return (
                    (a = o.pi.apply(void 0, [
                      o.pi.apply(void 0, $.concat([z.sent()])),
                      { name: r, $metadata: N(e) },
                    ])),
                    [3, 19]
                  );
                case 18:
                  (w = t.body),
                    (r = w.code || w.Code || r),
                    (a = (0, o.pi)((0, o.pi)({}, w), {
                      name: "" + r,
                      message: w.message || w.Message || r,
                      $fault: "client",
                      $metadata: N(e),
                    })),
                    (z.label = 19);
                case 19:
                  return (
                    (b = a.message || a.Message || r),
                    (a.message = b),
                    delete a.Message,
                    [2, Promise.reject(Object.assign(new Error(b), a))]
                  );
              }
            });
          });
        },
        p = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (a) {
              return (
                (t = e.body),
                (i = b(t, n)),
                [
                  2,
                  (0, o.pi)(
                    {
                      name: "ExternalServiceException",
                      $fault: "client",
                      $metadata: N(e),
                    },
                    i
                  ),
                ]
              );
            });
          });
        },
        m = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (a) {
              return (
                (t = e.body),
                (i = S(t, n)),
                [
                  2,
                  (0, o.pi)(
                    {
                      name: "InternalErrorException",
                      $fault: "server",
                      $metadata: N(e),
                    },
                    i
                  ),
                ]
              );
            });
          });
        },
        l = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (a) {
              return (
                (t = e.body),
                (i = A(t, n)),
                [
                  2,
                  (0, o.pi)(
                    {
                      name: "InvalidIdentityPoolConfigurationException",
                      $fault: "client",
                      $metadata: N(e),
                    },
                    i
                  ),
                ]
              );
            });
          });
        },
        v = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (a) {
              return (
                (t = e.body),
                (i = R(t, n)),
                [
                  2,
                  (0, o.pi)(
                    {
                      name: "InvalidParameterException",
                      $fault: "client",
                      $metadata: N(e),
                    },
                    i
                  ),
                ]
              );
            });
          });
        },
        y = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (a) {
              return (
                (t = e.body),
                (i = J(t, n)),
                [
                  2,
                  (0, o.pi)(
                    {
                      name: "LimitExceededException",
                      $fault: "client",
                      $metadata: N(e),
                    },
                    i
                  ),
                ]
              );
            });
          });
        },
        f = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (a) {
              return (
                (t = e.body),
                (i = P(t, n)),
                [
                  2,
                  (0, o.pi)(
                    {
                      name: "NotAuthorizedException",
                      $fault: "client",
                      $metadata: N(e),
                    },
                    i
                  ),
                ]
              );
            });
          });
        },
        g = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (a) {
              return (
                (t = e.body),
                (i = G(t, n)),
                [
                  2,
                  (0, o.pi)(
                    {
                      name: "ResourceConflictException",
                      $fault: "client",
                      $metadata: N(e),
                    },
                    i
                  ),
                ]
              );
            });
          });
        },
        h = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (a) {
              return (
                (t = e.body),
                (i = L(t, n)),
                [
                  2,
                  (0, o.pi)(
                    {
                      name: "ResourceNotFoundException",
                      $fault: "client",
                      $metadata: N(e),
                    },
                    i
                  ),
                ]
              );
            });
          });
        },
        x = function (e, n) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, i;
            return (0, o.Jh)(this, function (a) {
              return (
                (t = e.body),
                (i = M(t, n)),
                [
                  2,
                  (0, o.pi)(
                    {
                      name: "TooManyRequestsException",
                      $fault: "client",
                      $metadata: N(e),
                    },
                    i
                  ),
                ]
              );
            });
          });
        },
        E = function (e, n) {
          return (0, o.pi)(
            (0, o.pi)(
              (0, o.pi)(
                {},
                void 0 !== e.CustomRoleArn &&
                  null !== e.CustomRoleArn && { CustomRoleArn: e.CustomRoleArn }
              ),
              void 0 !== e.IdentityId &&
                null !== e.IdentityId && { IdentityId: e.IdentityId }
            ),
            void 0 !== e.Logins &&
              null !== e.Logins && { Logins: $(e.Logins, n) }
          );
        },
        I = function (e, n) {
          return (0, o.pi)(
            (0, o.pi)(
              (0, o.pi)(
                {},
                void 0 !== e.AccountId &&
                  null !== e.AccountId && { AccountId: e.AccountId }
              ),
              void 0 !== e.IdentityPoolId &&
                null !== e.IdentityPoolId && {
                  IdentityPoolId: e.IdentityPoolId,
                }
            ),
            void 0 !== e.Logins &&
              null !== e.Logins && { Logins: $(e.Logins, n) }
          );
        },
        $ = function (e, n) {
          return Object.entries(e).reduce(function (e, n) {
            var t,
              i = (0, o.CR)(n, 2),
              a = i[0],
              r = i[1];
            return null === r
              ? e
              : (0, o.pi)((0, o.pi)({}, e), (((t = {})[a] = r), t));
          }, {});
        },
        w = function (e, n) {
          return {
            AccessKeyId:
              void 0 !== e.AccessKeyId && null !== e.AccessKeyId
                ? e.AccessKeyId
                : void 0,
            Expiration:
              void 0 !== e.Expiration && null !== e.Expiration
                ? new Date(Math.round(1e3 * e.Expiration))
                : void 0,
            SecretKey:
              void 0 !== e.SecretKey && null !== e.SecretKey
                ? e.SecretKey
                : void 0,
            SessionToken:
              void 0 !== e.SessionToken && null !== e.SessionToken
                ? e.SessionToken
                : void 0,
          };
        },
        b = function (e, n) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        C = function (e, n) {
          return {
            Credentials:
              void 0 !== e.Credentials && null !== e.Credentials
                ? w(e.Credentials)
                : void 0,
            IdentityId:
              void 0 !== e.IdentityId && null !== e.IdentityId
                ? e.IdentityId
                : void 0,
          };
        },
        z = function (e, n) {
          return {
            IdentityId:
              void 0 !== e.IdentityId && null !== e.IdentityId
                ? e.IdentityId
                : void 0,
          };
        },
        S = function (e, n) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        A = function (e, n) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        R = function (e, n) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        J = function (e, n) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        P = function (e, n) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        G = function (e, n) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        L = function (e, n) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        M = function (e, n) {
          return {
            message:
              void 0 !== e.message && null !== e.message ? e.message : void 0,
          };
        },
        N = function (e) {
          var n;
          return {
            httpStatusCode: e.statusCode,
            requestId:
              null !== (n = e.headers["x-amzn-requestid"]) && void 0 !== n
                ? n
                : e.headers["x-amzn-request-id"],
            extendedRequestId: e.headers["x-amz-id-2"],
            cfId: e.headers["x-amz-cf-id"],
          };
        },
        k = function (e, n) {
          return (
            void 0 === e && (e = new Uint8Array()),
            e instanceof Uint8Array
              ? Promise.resolve(e)
              : n.streamCollector(e) || Promise.resolve(new Uint8Array())
          );
        },
        O = function (e, n, t, a, r) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var c, s, d, u, p, m;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, e.endpoint()];
                case 1:
                  return (
                    (c = o.sent()),
                    (s = c.hostname),
                    (d = c.protocol),
                    (u = void 0 === d ? "https" : d),
                    (p = c.port),
                    (m = {
                      protocol: u,
                      hostname: s,
                      port: p,
                      method: "POST",
                      path: t,
                      headers: n,
                    }),
                    void 0 !== a && (m.hostname = a),
                    void 0 !== r && (m.body = r),
                    [2, new i.aW(m)]
                  );
              }
            });
          });
        },
        T = function (e, n) {
          return (function (e, n) {
            return k(e, n).then(function (e) {
              return n.utf8Encoder(e);
            });
          })(e, n).then(function (e) {
            return e.length ? JSON.parse(e) : {};
          });
        },
        q = function (e, n) {
          var t,
            o,
            i = function (e) {
              var n = e;
              return (
                n.indexOf(":") >= 0 && (n = n.split(":")[0]),
                n.indexOf("#") >= 0 && (n = n.split("#")[1]),
                n
              );
            },
            a =
              ((t = e.headers),
              (o = "x-amzn-errortype"),
              Object.keys(t).find(function (e) {
                return e.toLowerCase() === o.toLowerCase();
              }));
          return void 0 !== a
            ? i(e.headers[a])
            : void 0 !== n.code
            ? i(n.code)
            : void 0 !== n.__type
            ? i(n.__type)
            : "";
        };
    },
  },
]);
//# sourceMappingURL=0eceb729-e2abb2bd3e22c7bda6be.js.map
