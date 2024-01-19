"use strict";
(self.webpackChunkvngle_site = self.webpackChunkvngle_site || []).push([
  [4708],
  {
    56226: function (e, t, r) {
      r.d(t, {
        BrV: function () {
          return m;
        },
        CEs: function () {
          return s;
        },
        DEn: function () {
          return y;
        },
        IY3: function () {
          return w;
        },
        LHU: function () {
          return v;
        },
        P3C: function () {
          return M;
        },
        R7p: function () {
          return O;
        },
        R89: function () {
          return u;
        },
        Sdo: function () {
          return l;
        },
        W5_: function () {
          return S;
        },
        WqK: function () {
          return x;
        },
        Y6h: function () {
          return I;
        },
        efb: function () {
          return P;
        },
        gYi: function () {
          return h;
        },
        gur: function () {
          return E;
        },
        iIy: function () {
          return R;
        },
        jPT: function () {
          return p;
        },
        l7b: function () {
          return c;
        },
        rVu: function () {
          return k;
        },
        t82: function () {
          return g;
        },
      });
      var o = r(97582),
        i = r(75882),
        n = r(82254),
        a = r(80162),
        d = r(42649),
        s = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v;
            return (0, o.Jh)(this, function (l) {
              switch (l.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        {},
                        X(e.RequestPayer) && {
                          "x-amz-request-payer": e.RequestPayer,
                        }
                      ),
                      X(e.ExpectedBucketOwner) && {
                        "x-amz-expected-bucket-owner": e.ExpectedBucketOwner,
                      }
                    )),
                    (a = "/{Bucket}/{Key+}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  if (
                    ((a = a.replace("{Bucket}", (0, n.jc)(d))),
                    void 0 === e.Key)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Key."
                    );
                  if ((d = e.Key).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Key."
                    );
                  return (
                    (a = a.replace(
                      "{Key+}",
                      d
                        .split("/")
                        .map(function (e) {
                          return (0, n.jc)(e);
                        })
                        .join("/")
                    )),
                    (s = (0, o.pi)(
                      { "x-id": "AbortMultipartUpload" },
                      void 0 !== e.UploadId && { uploadId: e.UploadId }
                    )),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (c = l.sent()),
                    (u = c.hostname),
                    (p = c.protocol),
                    (m = void 0 === p ? "https" : p),
                    (v = c.port),
                    [
                      2,
                      new i.aW({
                        protocol: m,
                        hostname: u,
                        port: v,
                        method: "DELETE",
                        headers: r,
                        path: a,
                        query: s,
                        body: undefined,
                      }),
                    ]
                  );
              }
            });
          });
        },
        c = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v, l, y;
            return (0, o.Jh)(this, function (h) {
              switch (h.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        { "content-type": "application/xml" },
                        X(e.RequestPayer) && {
                          "x-amz-request-payer": e.RequestPayer,
                        }
                      ),
                      X(e.ExpectedBucketOwner) && {
                        "x-amz-expected-bucket-owner": e.ExpectedBucketOwner,
                      }
                    )),
                    (a = "/{Bucket}/{Key+}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  if (
                    ((a = a.replace("{Bucket}", (0, n.jc)(d))),
                    void 0 === e.Key)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Key."
                    );
                  if ((d = e.Key).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Key."
                    );
                  return (
                    (a = a.replace(
                      "{Key+}",
                      d
                        .split("/")
                        .map(function (e) {
                          return (0, n.jc)(e);
                        })
                        .join("/")
                    )),
                    (s = (0, o.pi)(
                      {},
                      void 0 !== e.UploadId && { uploadId: e.UploadId }
                    )),
                    void 0 !== e.MultipartUpload &&
                      ((u = H(e.MultipartUpload, t)),
                      (c = '<?xml version="1.0" encoding="UTF-8"?>'),
                      u.addAttribute(
                        "xmlns",
                        "http://s3.amazonaws.com/doc/2006-03-01/"
                      ),
                      (c += u.toString())),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (p = h.sent()),
                    (m = p.hostname),
                    (v = p.protocol),
                    (l = void 0 === v ? "https" : v),
                    (y = p.port),
                    [
                      2,
                      new i.aW({
                        protocol: l,
                        hostname: m,
                        port: y,
                        method: "POST",
                        headers: r,
                        path: a,
                        query: s,
                        body: c,
                      }),
                    ]
                  );
              }
            });
          });
        },
        u = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v;
            return (0, o.Jh)(this, function (l) {
              switch (l.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          (0, o.pi)(
                            (0, o.pi)(
                              (0, o.pi)(
                                (0, o.pi)(
                                  (0, o.pi)(
                                    (0, o.pi)(
                                      (0, o.pi)(
                                        (0, o.pi)(
                                          (0, o.pi)(
                                            (0, o.pi)(
                                              (0, o.pi)(
                                                (0, o.pi)(
                                                  (0, o.pi)(
                                                    (0, o.pi)(
                                                      (0, o.pi)(
                                                        (0, o.pi)(
                                                          (0, o.pi)(
                                                            (0, o.pi)(
                                                              (0, o.pi)(
                                                                (0, o.pi)(
                                                                  (0, o.pi)(
                                                                    (0, o.pi)(
                                                                      (0, o.pi)(
                                                                        (0,
                                                                        o.pi)(
                                                                          (0,
                                                                          o.pi)(
                                                                            (0,
                                                                            o.pi)(
                                                                              (0,
                                                                              o.pi)(
                                                                                (0,
                                                                                o.pi)(
                                                                                  (0,
                                                                                  o.pi)(
                                                                                    (0,
                                                                                    o.pi)(
                                                                                      (0,
                                                                                      o.pi)(
                                                                                        (0,
                                                                                        o.pi)(
                                                                                          (0,
                                                                                          o.pi)(
                                                                                            (0,
                                                                                            o.pi)(
                                                                                              (0,
                                                                                              o.pi)(
                                                                                                {},
                                                                                                X(
                                                                                                  e.ACL
                                                                                                ) && {
                                                                                                  "x-amz-acl":
                                                                                                    e.ACL,
                                                                                                }
                                                                                              ),
                                                                                              X(
                                                                                                e.CacheControl
                                                                                              ) && {
                                                                                                "cache-control":
                                                                                                  e.CacheControl,
                                                                                              }
                                                                                            ),
                                                                                            X(
                                                                                              e.ContentDisposition
                                                                                            ) && {
                                                                                              "content-disposition":
                                                                                                e.ContentDisposition,
                                                                                            }
                                                                                          ),
                                                                                          X(
                                                                                            e.ContentEncoding
                                                                                          ) && {
                                                                                            "content-encoding":
                                                                                              e.ContentEncoding,
                                                                                          }
                                                                                        ),
                                                                                        X(
                                                                                          e.ContentLanguage
                                                                                        ) && {
                                                                                          "content-language":
                                                                                            e.ContentLanguage,
                                                                                        }
                                                                                      ),
                                                                                      X(
                                                                                        e.ContentType
                                                                                      ) && {
                                                                                        "content-type":
                                                                                          e.ContentType,
                                                                                      }
                                                                                    ),
                                                                                    X(
                                                                                      e.CopySource
                                                                                    ) && {
                                                                                      "x-amz-copy-source":
                                                                                        e.CopySource,
                                                                                    }
                                                                                  ),
                                                                                  X(
                                                                                    e.CopySourceIfMatch
                                                                                  ) && {
                                                                                    "x-amz-copy-source-if-match":
                                                                                      e.CopySourceIfMatch,
                                                                                  }
                                                                                ),
                                                                                X(
                                                                                  e.CopySourceIfModifiedSince
                                                                                ) && {
                                                                                  "x-amz-copy-source-if-modified-since":
                                                                                    (0,
                                                                                    n._w)(
                                                                                      e.CopySourceIfModifiedSince
                                                                                    ).toString(),
                                                                                }
                                                                              ),
                                                                              X(
                                                                                e.CopySourceIfNoneMatch
                                                                              ) && {
                                                                                "x-amz-copy-source-if-none-match":
                                                                                  e.CopySourceIfNoneMatch,
                                                                              }
                                                                            ),
                                                                            X(
                                                                              e.CopySourceIfUnmodifiedSince
                                                                            ) && {
                                                                              "x-amz-copy-source-if-unmodified-since":
                                                                                (0,
                                                                                n._w)(
                                                                                  e.CopySourceIfUnmodifiedSince
                                                                                ).toString(),
                                                                            }
                                                                          ),
                                                                          X(
                                                                            e.Expires
                                                                          ) && {
                                                                            expires:
                                                                              (0,
                                                                              n._w)(
                                                                                e.Expires
                                                                              ).toString(),
                                                                          }
                                                                        ),
                                                                        X(
                                                                          e.GrantFullControl
                                                                        ) && {
                                                                          "x-amz-grant-full-control":
                                                                            e.GrantFullControl,
                                                                        }
                                                                      ),
                                                                      X(
                                                                        e.GrantRead
                                                                      ) && {
                                                                        "x-amz-grant-read":
                                                                          e.GrantRead,
                                                                      }
                                                                    ),
                                                                    X(
                                                                      e.GrantReadACP
                                                                    ) && {
                                                                      "x-amz-grant-read-acp":
                                                                        e.GrantReadACP,
                                                                    }
                                                                  ),
                                                                  X(
                                                                    e.GrantWriteACP
                                                                  ) && {
                                                                    "x-amz-grant-write-acp":
                                                                      e.GrantWriteACP,
                                                                  }
                                                                ),
                                                                X(
                                                                  e.MetadataDirective
                                                                ) && {
                                                                  "x-amz-metadata-directive":
                                                                    e.MetadataDirective,
                                                                }
                                                              ),
                                                              X(
                                                                e.TaggingDirective
                                                              ) && {
                                                                "x-amz-tagging-directive":
                                                                  e.TaggingDirective,
                                                              }
                                                            ),
                                                            X(
                                                              e.ServerSideEncryption
                                                            ) && {
                                                              "x-amz-server-side-encryption":
                                                                e.ServerSideEncryption,
                                                            }
                                                          ),
                                                          X(e.StorageClass) && {
                                                            "x-amz-storage-class":
                                                              e.StorageClass,
                                                          }
                                                        ),
                                                        X(
                                                          e.WebsiteRedirectLocation
                                                        ) && {
                                                          "x-amz-website-redirect-location":
                                                            e.WebsiteRedirectLocation,
                                                        }
                                                      ),
                                                      X(
                                                        e.SSECustomerAlgorithm
                                                      ) && {
                                                        "x-amz-server-side-encryption-customer-algorithm":
                                                          e.SSECustomerAlgorithm,
                                                      }
                                                    ),
                                                    X(e.SSECustomerKey) && {
                                                      "x-amz-server-side-encryption-customer-key":
                                                        e.SSECustomerKey,
                                                    }
                                                  ),
                                                  X(e.SSECustomerKeyMD5) && {
                                                    "x-amz-server-side-encryption-customer-key-md5":
                                                      e.SSECustomerKeyMD5,
                                                  }
                                                ),
                                                X(e.SSEKMSKeyId) && {
                                                  "x-amz-server-side-encryption-aws-kms-key-id":
                                                    e.SSEKMSKeyId,
                                                }
                                              ),
                                              X(e.SSEKMSEncryptionContext) && {
                                                "x-amz-server-side-encryption-context":
                                                  e.SSEKMSEncryptionContext,
                                              }
                                            ),
                                            X(e.BucketKeyEnabled) && {
                                              "x-amz-server-side-encryption-bucket-key-enabled":
                                                e.BucketKeyEnabled.toString(),
                                            }
                                          ),
                                          X(
                                            e.CopySourceSSECustomerAlgorithm
                                          ) && {
                                            "x-amz-copy-source-server-side-encryption-customer-algorithm":
                                              e.CopySourceSSECustomerAlgorithm,
                                          }
                                        ),
                                        X(e.CopySourceSSECustomerKey) && {
                                          "x-amz-copy-source-server-side-encryption-customer-key":
                                            e.CopySourceSSECustomerKey,
                                        }
                                      ),
                                      X(e.CopySourceSSECustomerKeyMD5) && {
                                        "x-amz-copy-source-server-side-encryption-customer-key-md5":
                                          e.CopySourceSSECustomerKeyMD5,
                                      }
                                    ),
                                    X(e.RequestPayer) && {
                                      "x-amz-request-payer": e.RequestPayer,
                                    }
                                  ),
                                  X(e.Tagging) && { "x-amz-tagging": e.Tagging }
                                ),
                                X(e.ObjectLockMode) && {
                                  "x-amz-object-lock-mode": e.ObjectLockMode,
                                }
                              ),
                              X(e.ObjectLockRetainUntilDate) && {
                                "x-amz-object-lock-retain-until-date": (
                                  e.ObjectLockRetainUntilDate.toISOString().split(
                                    "."
                                  )[0] + "Z"
                                ).toString(),
                              }
                            ),
                            X(e.ObjectLockLegalHoldStatus) && {
                              "x-amz-object-lock-legal-hold":
                                e.ObjectLockLegalHoldStatus,
                            }
                          ),
                          X(e.ExpectedBucketOwner) && {
                            "x-amz-expected-bucket-owner":
                              e.ExpectedBucketOwner,
                          }
                        ),
                        X(e.ExpectedSourceBucketOwner) && {
                          "x-amz-source-expected-bucket-owner":
                            e.ExpectedSourceBucketOwner,
                        }
                      ),
                      void 0 !== e.Metadata &&
                        Object.keys(e.Metadata).reduce(function (t, r) {
                          var i;
                          return (0,
                          o.pi)((0, o.pi)({}, t), (((i = {})["x-amz-meta-" + r.toLowerCase()] = e.Metadata[r]), i));
                        }, {})
                    )),
                    (a = "/{Bucket}/{Key+}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  if (
                    ((a = a.replace("{Bucket}", (0, n.jc)(d))),
                    void 0 === e.Key)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Key."
                    );
                  if ((d = e.Key).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Key."
                    );
                  return (
                    (a = a.replace(
                      "{Key+}",
                      d
                        .split("/")
                        .map(function (e) {
                          return (0, n.jc)(e);
                        })
                        .join("/")
                    )),
                    (s = { "x-id": "CopyObject" }),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (c = l.sent()),
                    (u = c.hostname),
                    (p = c.protocol),
                    (m = void 0 === p ? "https" : p),
                    (v = c.port),
                    [
                      2,
                      new i.aW({
                        protocol: m,
                        hostname: u,
                        port: v,
                        method: "PUT",
                        headers: r,
                        path: a,
                        query: s,
                        body: undefined,
                      }),
                    ]
                  );
              }
            });
          });
        },
        p = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v;
            return (0, o.Jh)(this, function (l) {
              switch (l.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          (0, o.pi)(
                            (0, o.pi)(
                              (0, o.pi)(
                                (0, o.pi)(
                                  (0, o.pi)(
                                    (0, o.pi)(
                                      (0, o.pi)(
                                        (0, o.pi)(
                                          (0, o.pi)(
                                            (0, o.pi)(
                                              (0, o.pi)(
                                                (0, o.pi)(
                                                  (0, o.pi)(
                                                    (0, o.pi)(
                                                      (0, o.pi)(
                                                        (0, o.pi)(
                                                          (0, o.pi)(
                                                            (0, o.pi)(
                                                              (0, o.pi)(
                                                                (0, o.pi)(
                                                                  (0, o.pi)(
                                                                    (0, o.pi)(
                                                                      (0, o.pi)(
                                                                        (0,
                                                                        o.pi)(
                                                                          {},
                                                                          X(
                                                                            e.ACL
                                                                          ) && {
                                                                            "x-amz-acl":
                                                                              e.ACL,
                                                                          }
                                                                        ),
                                                                        X(
                                                                          e.CacheControl
                                                                        ) && {
                                                                          "cache-control":
                                                                            e.CacheControl,
                                                                        }
                                                                      ),
                                                                      X(
                                                                        e.ContentDisposition
                                                                      ) && {
                                                                        "content-disposition":
                                                                          e.ContentDisposition,
                                                                      }
                                                                    ),
                                                                    X(
                                                                      e.ContentEncoding
                                                                    ) && {
                                                                      "content-encoding":
                                                                        e.ContentEncoding,
                                                                    }
                                                                  ),
                                                                  X(
                                                                    e.ContentLanguage
                                                                  ) && {
                                                                    "content-language":
                                                                      e.ContentLanguage,
                                                                  }
                                                                ),
                                                                X(
                                                                  e.ContentType
                                                                ) && {
                                                                  "content-type":
                                                                    e.ContentType,
                                                                }
                                                              ),
                                                              X(e.Expires) && {
                                                                expires: (0,
                                                                n._w)(
                                                                  e.Expires
                                                                ).toString(),
                                                              }
                                                            ),
                                                            X(
                                                              e.GrantFullControl
                                                            ) && {
                                                              "x-amz-grant-full-control":
                                                                e.GrantFullControl,
                                                            }
                                                          ),
                                                          X(e.GrantRead) && {
                                                            "x-amz-grant-read":
                                                              e.GrantRead,
                                                          }
                                                        ),
                                                        X(e.GrantReadACP) && {
                                                          "x-amz-grant-read-acp":
                                                            e.GrantReadACP,
                                                        }
                                                      ),
                                                      X(e.GrantWriteACP) && {
                                                        "x-amz-grant-write-acp":
                                                          e.GrantWriteACP,
                                                      }
                                                    ),
                                                    X(
                                                      e.ServerSideEncryption
                                                    ) && {
                                                      "x-amz-server-side-encryption":
                                                        e.ServerSideEncryption,
                                                    }
                                                  ),
                                                  X(e.StorageClass) && {
                                                    "x-amz-storage-class":
                                                      e.StorageClass,
                                                  }
                                                ),
                                                X(
                                                  e.WebsiteRedirectLocation
                                                ) && {
                                                  "x-amz-website-redirect-location":
                                                    e.WebsiteRedirectLocation,
                                                }
                                              ),
                                              X(e.SSECustomerAlgorithm) && {
                                                "x-amz-server-side-encryption-customer-algorithm":
                                                  e.SSECustomerAlgorithm,
                                              }
                                            ),
                                            X(e.SSECustomerKey) && {
                                              "x-amz-server-side-encryption-customer-key":
                                                e.SSECustomerKey,
                                            }
                                          ),
                                          X(e.SSECustomerKeyMD5) && {
                                            "x-amz-server-side-encryption-customer-key-md5":
                                              e.SSECustomerKeyMD5,
                                          }
                                        ),
                                        X(e.SSEKMSKeyId) && {
                                          "x-amz-server-side-encryption-aws-kms-key-id":
                                            e.SSEKMSKeyId,
                                        }
                                      ),
                                      X(e.SSEKMSEncryptionContext) && {
                                        "x-amz-server-side-encryption-context":
                                          e.SSEKMSEncryptionContext,
                                      }
                                    ),
                                    X(e.BucketKeyEnabled) && {
                                      "x-amz-server-side-encryption-bucket-key-enabled":
                                        e.BucketKeyEnabled.toString(),
                                    }
                                  ),
                                  X(e.RequestPayer) && {
                                    "x-amz-request-payer": e.RequestPayer,
                                  }
                                ),
                                X(e.Tagging) && { "x-amz-tagging": e.Tagging }
                              ),
                              X(e.ObjectLockMode) && {
                                "x-amz-object-lock-mode": e.ObjectLockMode,
                              }
                            ),
                            X(e.ObjectLockRetainUntilDate) && {
                              "x-amz-object-lock-retain-until-date": (
                                e.ObjectLockRetainUntilDate.toISOString().split(
                                  "."
                                )[0] + "Z"
                              ).toString(),
                            }
                          ),
                          X(e.ObjectLockLegalHoldStatus) && {
                            "x-amz-object-lock-legal-hold":
                              e.ObjectLockLegalHoldStatus,
                          }
                        ),
                        X(e.ExpectedBucketOwner) && {
                          "x-amz-expected-bucket-owner": e.ExpectedBucketOwner,
                        }
                      ),
                      void 0 !== e.Metadata &&
                        Object.keys(e.Metadata).reduce(function (t, r) {
                          var i;
                          return (0,
                          o.pi)((0, o.pi)({}, t), (((i = {})["x-amz-meta-" + r.toLowerCase()] = e.Metadata[r]), i));
                        }, {})
                    )),
                    (a = "/{Bucket}/{Key+}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  if (
                    ((a = a.replace("{Bucket}", (0, n.jc)(d))),
                    void 0 === e.Key)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Key."
                    );
                  if ((d = e.Key).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Key."
                    );
                  return (
                    (a = a.replace(
                      "{Key+}",
                      d
                        .split("/")
                        .map(function (e) {
                          return (0, n.jc)(e);
                        })
                        .join("/")
                    )),
                    (s = { uploads: "" }),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (c = l.sent()),
                    (u = c.hostname),
                    (p = c.protocol),
                    (m = void 0 === p ? "https" : p),
                    (v = c.port),
                    [
                      2,
                      new i.aW({
                        protocol: m,
                        hostname: u,
                        port: v,
                        method: "POST",
                        headers: r,
                        path: a,
                        query: s,
                        body: undefined,
                      }),
                    ]
                  );
              }
            });
          });
        },
        m = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v;
            return (0, o.Jh)(this, function (l) {
              switch (l.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          (0, o.pi)({}, X(e.MFA) && { "x-amz-mfa": e.MFA }),
                          X(e.RequestPayer) && {
                            "x-amz-request-payer": e.RequestPayer,
                          }
                        ),
                        X(e.BypassGovernanceRetention) && {
                          "x-amz-bypass-governance-retention":
                            e.BypassGovernanceRetention.toString(),
                        }
                      ),
                      X(e.ExpectedBucketOwner) && {
                        "x-amz-expected-bucket-owner": e.ExpectedBucketOwner,
                      }
                    )),
                    (a = "/{Bucket}/{Key+}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  if (
                    ((a = a.replace("{Bucket}", (0, n.jc)(d))),
                    void 0 === e.Key)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Key."
                    );
                  if ((d = e.Key).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Key."
                    );
                  return (
                    (a = a.replace(
                      "{Key+}",
                      d
                        .split("/")
                        .map(function (e) {
                          return (0, n.jc)(e);
                        })
                        .join("/")
                    )),
                    (s = (0, o.pi)(
                      { "x-id": "DeleteObject" },
                      void 0 !== e.VersionId && { versionId: e.VersionId }
                    )),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (c = l.sent()),
                    (u = c.hostname),
                    (p = c.protocol),
                    (m = void 0 === p ? "https" : p),
                    (v = c.port),
                    [
                      2,
                      new i.aW({
                        protocol: m,
                        hostname: u,
                        port: v,
                        method: "DELETE",
                        headers: r,
                        path: a,
                        query: s,
                        body: undefined,
                      }),
                    ]
                  );
              }
            });
          });
        },
        v = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v;
            return (0, o.Jh)(this, function (l) {
              switch (l.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          (0, o.pi)(
                            (0, o.pi)(
                              (0, o.pi)(
                                (0, o.pi)(
                                  (0, o.pi)(
                                    (0, o.pi)(
                                      (0, o.pi)(
                                        {},
                                        X(e.IfMatch) && {
                                          "if-match": e.IfMatch,
                                        }
                                      ),
                                      X(e.IfModifiedSince) && {
                                        "if-modified-since": (0, n._w)(
                                          e.IfModifiedSince
                                        ).toString(),
                                      }
                                    ),
                                    X(e.IfNoneMatch) && {
                                      "if-none-match": e.IfNoneMatch,
                                    }
                                  ),
                                  X(e.IfUnmodifiedSince) && {
                                    "if-unmodified-since": (0, n._w)(
                                      e.IfUnmodifiedSince
                                    ).toString(),
                                  }
                                ),
                                X(e.Range) && { range: e.Range }
                              ),
                              X(e.SSECustomerAlgorithm) && {
                                "x-amz-server-side-encryption-customer-algorithm":
                                  e.SSECustomerAlgorithm,
                              }
                            ),
                            X(e.SSECustomerKey) && {
                              "x-amz-server-side-encryption-customer-key":
                                e.SSECustomerKey,
                            }
                          ),
                          X(e.SSECustomerKeyMD5) && {
                            "x-amz-server-side-encryption-customer-key-md5":
                              e.SSECustomerKeyMD5,
                          }
                        ),
                        X(e.RequestPayer) && {
                          "x-amz-request-payer": e.RequestPayer,
                        }
                      ),
                      X(e.ExpectedBucketOwner) && {
                        "x-amz-expected-bucket-owner": e.ExpectedBucketOwner,
                      }
                    )),
                    (a = "/{Bucket}/{Key+}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  if (
                    ((a = a.replace("{Bucket}", (0, n.jc)(d))),
                    void 0 === e.Key)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Key."
                    );
                  if ((d = e.Key).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Key."
                    );
                  return (
                    (a = a.replace(
                      "{Key+}",
                      d
                        .split("/")
                        .map(function (e) {
                          return (0, n.jc)(e);
                        })
                        .join("/")
                    )),
                    (s = (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          (0, o.pi)(
                            (0, o.pi)(
                              (0, o.pi)(
                                (0, o.pi)(
                                  (0, o.pi)(
                                    { "x-id": "GetObject" },
                                    void 0 !== e.ResponseCacheControl && {
                                      "response-cache-control":
                                        e.ResponseCacheControl,
                                    }
                                  ),
                                  void 0 !== e.ResponseContentDisposition && {
                                    "response-content-disposition":
                                      e.ResponseContentDisposition,
                                  }
                                ),
                                void 0 !== e.ResponseContentEncoding && {
                                  "response-content-encoding":
                                    e.ResponseContentEncoding,
                                }
                              ),
                              void 0 !== e.ResponseContentLanguage && {
                                "response-content-language":
                                  e.ResponseContentLanguage,
                              }
                            ),
                            void 0 !== e.ResponseContentType && {
                              "response-content-type": e.ResponseContentType,
                            }
                          ),
                          void 0 !== e.ResponseExpires && {
                            "response-expires": (
                              e.ResponseExpires.toISOString().split(".")[0] +
                              "Z"
                            ).toString(),
                          }
                        ),
                        void 0 !== e.VersionId && { versionId: e.VersionId }
                      ),
                      void 0 !== e.PartNumber && {
                        partNumber: e.PartNumber.toString(),
                      }
                    )),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (c = l.sent()),
                    (u = c.hostname),
                    (p = c.protocol),
                    (m = void 0 === p ? "https" : p),
                    (v = c.port),
                    [
                      2,
                      new i.aW({
                        protocol: m,
                        hostname: u,
                        port: v,
                        method: "GET",
                        headers: r,
                        path: a,
                        query: s,
                        body: undefined,
                      }),
                    ]
                  );
              }
            });
          });
        },
        l = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v;
            return (0, o.Jh)(this, function (l) {
              switch (l.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        {},
                        X(e.RequestPayer) && {
                          "x-amz-request-payer": e.RequestPayer,
                        }
                      ),
                      X(e.ExpectedBucketOwner) && {
                        "x-amz-expected-bucket-owner": e.ExpectedBucketOwner,
                      }
                    )),
                    (a = "/{Bucket}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  return (
                    (a = a.replace("{Bucket}", (0, n.jc)(d))),
                    (s = (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          (0, o.pi)(
                            (0, o.pi)(
                              (0, o.pi)(
                                (0, o.pi)(
                                  { "list-type": "2" },
                                  void 0 !== e.Delimiter && {
                                    delimiter: e.Delimiter,
                                  }
                                ),
                                void 0 !== e.EncodingType && {
                                  "encoding-type": e.EncodingType,
                                }
                              ),
                              void 0 !== e.MaxKeys && {
                                "max-keys": e.MaxKeys.toString(),
                              }
                            ),
                            void 0 !== e.Prefix && { prefix: e.Prefix }
                          ),
                          void 0 !== e.ContinuationToken && {
                            "continuation-token": e.ContinuationToken,
                          }
                        ),
                        void 0 !== e.FetchOwner && {
                          "fetch-owner": e.FetchOwner.toString(),
                        }
                      ),
                      void 0 !== e.StartAfter && { "start-after": e.StartAfter }
                    )),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (c = l.sent()),
                    (u = c.hostname),
                    (p = c.protocol),
                    (m = void 0 === p ? "https" : p),
                    (v = c.port),
                    [
                      2,
                      new i.aW({
                        protocol: m,
                        hostname: u,
                        port: v,
                        method: "GET",
                        headers: r,
                        path: a,
                        query: s,
                        body: undefined,
                      }),
                    ]
                  );
              }
            });
          });
        },
        y = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v;
            return (0, o.Jh)(this, function (l) {
              switch (l.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        {},
                        X(e.RequestPayer) && {
                          "x-amz-request-payer": e.RequestPayer,
                        }
                      ),
                      X(e.ExpectedBucketOwner) && {
                        "x-amz-expected-bucket-owner": e.ExpectedBucketOwner,
                      }
                    )),
                    (a = "/{Bucket}/{Key+}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  if (
                    ((a = a.replace("{Bucket}", (0, n.jc)(d))),
                    void 0 === e.Key)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Key."
                    );
                  if ((d = e.Key).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Key."
                    );
                  return (
                    (a = a.replace(
                      "{Key+}",
                      d
                        .split("/")
                        .map(function (e) {
                          return (0, n.jc)(e);
                        })
                        .join("/")
                    )),
                    (s = (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          { "x-id": "ListParts" },
                          void 0 !== e.MaxParts && {
                            "max-parts": e.MaxParts.toString(),
                          }
                        ),
                        void 0 !== e.PartNumberMarker && {
                          "part-number-marker": e.PartNumberMarker,
                        }
                      ),
                      void 0 !== e.UploadId && { uploadId: e.UploadId }
                    )),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (c = l.sent()),
                    (u = c.hostname),
                    (p = c.protocol),
                    (m = void 0 === p ? "https" : p),
                    (v = c.port),
                    [
                      2,
                      new i.aW({
                        protocol: m,
                        hostname: u,
                        port: v,
                        method: "GET",
                        headers: r,
                        path: a,
                        query: s,
                        body: undefined,
                      }),
                    ]
                  );
              }
            });
          });
        },
        h = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v, l, y;
            return (0, o.Jh)(this, function (h) {
              switch (h.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          (0, o.pi)(
                            (0, o.pi)(
                              (0, o.pi)(
                                (0, o.pi)(
                                  (0, o.pi)(
                                    (0, o.pi)(
                                      (0, o.pi)(
                                        (0, o.pi)(
                                          (0, o.pi)(
                                            (0, o.pi)(
                                              (0, o.pi)(
                                                (0, o.pi)(
                                                  (0, o.pi)(
                                                    (0, o.pi)(
                                                      (0, o.pi)(
                                                        (0, o.pi)(
                                                          (0, o.pi)(
                                                            (0, o.pi)(
                                                              (0, o.pi)(
                                                                (0, o.pi)(
                                                                  (0, o.pi)(
                                                                    (0, o.pi)(
                                                                      (0, o.pi)(
                                                                        (0,
                                                                        o.pi)(
                                                                          (0,
                                                                          o.pi)(
                                                                            (0,
                                                                            o.pi)(
                                                                              {
                                                                                "content-type":
                                                                                  "application/octet-stream",
                                                                              },
                                                                              X(
                                                                                e.ACL
                                                                              ) && {
                                                                                "x-amz-acl":
                                                                                  e.ACL,
                                                                              }
                                                                            ),
                                                                            X(
                                                                              e.CacheControl
                                                                            ) && {
                                                                              "cache-control":
                                                                                e.CacheControl,
                                                                            }
                                                                          ),
                                                                          X(
                                                                            e.ContentDisposition
                                                                          ) && {
                                                                            "content-disposition":
                                                                              e.ContentDisposition,
                                                                          }
                                                                        ),
                                                                        X(
                                                                          e.ContentEncoding
                                                                        ) && {
                                                                          "content-encoding":
                                                                            e.ContentEncoding,
                                                                        }
                                                                      ),
                                                                      X(
                                                                        e.ContentLanguage
                                                                      ) && {
                                                                        "content-language":
                                                                          e.ContentLanguage,
                                                                      }
                                                                    ),
                                                                    X(
                                                                      e.ContentLength
                                                                    ) && {
                                                                      "content-length":
                                                                        e.ContentLength.toString(),
                                                                    }
                                                                  ),
                                                                  X(
                                                                    e.ContentMD5
                                                                  ) && {
                                                                    "content-md5":
                                                                      e.ContentMD5,
                                                                  }
                                                                ),
                                                                X(
                                                                  e.ContentType
                                                                ) && {
                                                                  "content-type":
                                                                    e.ContentType,
                                                                }
                                                              ),
                                                              X(e.Expires) && {
                                                                expires: (0,
                                                                n._w)(
                                                                  e.Expires
                                                                ).toString(),
                                                              }
                                                            ),
                                                            X(
                                                              e.GrantFullControl
                                                            ) && {
                                                              "x-amz-grant-full-control":
                                                                e.GrantFullControl,
                                                            }
                                                          ),
                                                          X(e.GrantRead) && {
                                                            "x-amz-grant-read":
                                                              e.GrantRead,
                                                          }
                                                        ),
                                                        X(e.GrantReadACP) && {
                                                          "x-amz-grant-read-acp":
                                                            e.GrantReadACP,
                                                        }
                                                      ),
                                                      X(e.GrantWriteACP) && {
                                                        "x-amz-grant-write-acp":
                                                          e.GrantWriteACP,
                                                      }
                                                    ),
                                                    X(
                                                      e.ServerSideEncryption
                                                    ) && {
                                                      "x-amz-server-side-encryption":
                                                        e.ServerSideEncryption,
                                                    }
                                                  ),
                                                  X(e.StorageClass) && {
                                                    "x-amz-storage-class":
                                                      e.StorageClass,
                                                  }
                                                ),
                                                X(
                                                  e.WebsiteRedirectLocation
                                                ) && {
                                                  "x-amz-website-redirect-location":
                                                    e.WebsiteRedirectLocation,
                                                }
                                              ),
                                              X(e.SSECustomerAlgorithm) && {
                                                "x-amz-server-side-encryption-customer-algorithm":
                                                  e.SSECustomerAlgorithm,
                                              }
                                            ),
                                            X(e.SSECustomerKey) && {
                                              "x-amz-server-side-encryption-customer-key":
                                                e.SSECustomerKey,
                                            }
                                          ),
                                          X(e.SSECustomerKeyMD5) && {
                                            "x-amz-server-side-encryption-customer-key-md5":
                                              e.SSECustomerKeyMD5,
                                          }
                                        ),
                                        X(e.SSEKMSKeyId) && {
                                          "x-amz-server-side-encryption-aws-kms-key-id":
                                            e.SSEKMSKeyId,
                                        }
                                      ),
                                      X(e.SSEKMSEncryptionContext) && {
                                        "x-amz-server-side-encryption-context":
                                          e.SSEKMSEncryptionContext,
                                      }
                                    ),
                                    X(e.BucketKeyEnabled) && {
                                      "x-amz-server-side-encryption-bucket-key-enabled":
                                        e.BucketKeyEnabled.toString(),
                                    }
                                  ),
                                  X(e.RequestPayer) && {
                                    "x-amz-request-payer": e.RequestPayer,
                                  }
                                ),
                                X(e.Tagging) && { "x-amz-tagging": e.Tagging }
                              ),
                              X(e.ObjectLockMode) && {
                                "x-amz-object-lock-mode": e.ObjectLockMode,
                              }
                            ),
                            X(e.ObjectLockRetainUntilDate) && {
                              "x-amz-object-lock-retain-until-date": (
                                e.ObjectLockRetainUntilDate.toISOString().split(
                                  "."
                                )[0] + "Z"
                              ).toString(),
                            }
                          ),
                          X(e.ObjectLockLegalHoldStatus) && {
                            "x-amz-object-lock-legal-hold":
                              e.ObjectLockLegalHoldStatus,
                          }
                        ),
                        X(e.ExpectedBucketOwner) && {
                          "x-amz-expected-bucket-owner": e.ExpectedBucketOwner,
                        }
                      ),
                      void 0 !== e.Metadata &&
                        Object.keys(e.Metadata).reduce(function (t, r) {
                          var i;
                          return (0,
                          o.pi)((0, o.pi)({}, t), (((i = {})["x-amz-meta-" + r.toLowerCase()] = e.Metadata[r]), i));
                        }, {})
                    )),
                    (a = "/{Bucket}/{Key+}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  if (
                    ((a = a.replace("{Bucket}", (0, n.jc)(d))),
                    void 0 === e.Key)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Key."
                    );
                  if ((d = e.Key).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Key."
                    );
                  return (
                    (a = a.replace(
                      "{Key+}",
                      d
                        .split("/")
                        .map(function (e) {
                          return (0, n.jc)(e);
                        })
                        .join("/")
                    )),
                    (s = { "x-id": "PutObject" }),
                    void 0 !== e.Body && ((u = e.Body), (c = u)),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (p = h.sent()),
                    (m = p.hostname),
                    (v = p.protocol),
                    (l = void 0 === v ? "https" : v),
                    (y = p.port),
                    [
                      2,
                      new i.aW({
                        protocol: l,
                        hostname: m,
                        port: y,
                        method: "PUT",
                        headers: r,
                        path: a,
                        query: s,
                        body: c,
                      }),
                    ]
                  );
              }
            });
          });
        },
        g = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, a, d, s, c, u, p, m, v, l, y;
            return (0, o.Jh)(this, function (h) {
              switch (h.label) {
                case 0:
                  if (
                    ((r = (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          (0, o.pi)(
                            (0, o.pi)(
                              (0, o.pi)(
                                (0, o.pi)(
                                  {
                                    "content-type": "application/octet-stream",
                                  },
                                  X(e.ContentLength) && {
                                    "content-length":
                                      e.ContentLength.toString(),
                                  }
                                ),
                                X(e.ContentMD5) && {
                                  "content-md5": e.ContentMD5,
                                }
                              ),
                              X(e.SSECustomerAlgorithm) && {
                                "x-amz-server-side-encryption-customer-algorithm":
                                  e.SSECustomerAlgorithm,
                              }
                            ),
                            X(e.SSECustomerKey) && {
                              "x-amz-server-side-encryption-customer-key":
                                e.SSECustomerKey,
                            }
                          ),
                          X(e.SSECustomerKeyMD5) && {
                            "x-amz-server-side-encryption-customer-key-md5":
                              e.SSECustomerKeyMD5,
                          }
                        ),
                        X(e.RequestPayer) && {
                          "x-amz-request-payer": e.RequestPayer,
                        }
                      ),
                      X(e.ExpectedBucketOwner) && {
                        "x-amz-expected-bucket-owner": e.ExpectedBucketOwner,
                      }
                    )),
                    (a = "/{Bucket}/{Key+}"),
                    void 0 === e.Bucket)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Bucket."
                    );
                  if ((d = e.Bucket).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Bucket."
                    );
                  if (
                    ((a = a.replace("{Bucket}", (0, n.jc)(d))),
                    void 0 === e.Key)
                  )
                    throw new Error(
                      "No value provided for input HTTP label: Key."
                    );
                  if ((d = e.Key).length <= 0)
                    throw new Error(
                      "Empty value provided for input HTTP label: Key."
                    );
                  return (
                    (a = a.replace(
                      "{Key+}",
                      d
                        .split("/")
                        .map(function (e) {
                          return (0, n.jc)(e);
                        })
                        .join("/")
                    )),
                    (s = (0, o.pi)(
                      (0, o.pi)(
                        { "x-id": "UploadPart" },
                        void 0 !== e.PartNumber && {
                          partNumber: e.PartNumber.toString(),
                        }
                      ),
                      void 0 !== e.UploadId && { uploadId: e.UploadId }
                    )),
                    void 0 !== e.Body && ((u = e.Body), (c = u)),
                    [4, t.endpoint()]
                  );
                case 1:
                  return (
                    (p = h.sent()),
                    (m = p.hostname),
                    (v = p.protocol),
                    (l = void 0 === v ? "https" : v),
                    (y = p.port),
                    [
                      2,
                      new i.aW({
                        protocol: l,
                        hostname: m,
                        port: y,
                        method: "PUT",
                        headers: r,
                        path: a,
                        query: s,
                        body: c,
                      }),
                    ]
                  );
              }
            });
          });
        },
        x = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return 204 !== e.statusCode && e.statusCode >= 300
                    ? [2, f(e, t)]
                    : ((r = { $metadata: Y(e), RequestCharged: void 0 }),
                      void 0 !== e.headers["x-amz-request-charged"] &&
                        (r.RequestCharged = e.headers["x-amz-request-charged"]),
                      [4, Q(e.body, t)]);
                case 1:
                  return o.sent(), [2, Promise.resolve(r)];
              }
            });
          });
        },
        f = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c, u;
            return (0, o.Jh)(this, function (p) {
              switch (p.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (u = {}), [4, ee(e.body, t)];
                case 1:
                  switch (
                    ((r = o.pi.apply(
                      void 0,
                      i.concat([((u.body = p.sent()), u)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    a)
                  ) {
                    case "NoSuchUpload":
                    case "com.amazonaws.s3#NoSuchUpload":
                      return [3, 2];
                  }
                  return [3, 4];
                case 2:
                  return (d = [{}]), [4, G(r, t)];
                case 3:
                  return (
                    (n = o.pi.apply(void 0, [
                      o.pi.apply(void 0, d.concat([p.sent()])),
                      { name: a, $metadata: Y(e) },
                    ])),
                    [3, 5]
                  );
                case 4:
                  (s = r.body),
                    (a = s.code || s.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, s), {
                      name: "" + a,
                      message: s.message || s.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (p.label = 5);
                case 5:
                  return (
                    (c = n.message || n.Message || a),
                    (n.message = c),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(c), n))]
                  );
              }
            });
          });
        },
        S = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return 200 !== e.statusCode && e.statusCode >= 300
                    ? [2, b(e, t)]
                    : ((r = {
                        $metadata: Y(e),
                        Bucket: void 0,
                        BucketKeyEnabled: void 0,
                        ETag: void 0,
                        Expiration: void 0,
                        Key: void 0,
                        Location: void 0,
                        RequestCharged: void 0,
                        SSEKMSKeyId: void 0,
                        ServerSideEncryption: void 0,
                        VersionId: void 0,
                      }),
                      void 0 !== e.headers["x-amz-expiration"] &&
                        (r.Expiration = e.headers["x-amz-expiration"]),
                      void 0 !== e.headers["x-amz-server-side-encryption"] &&
                        (r.ServerSideEncryption =
                          e.headers["x-amz-server-side-encryption"]),
                      void 0 !== e.headers["x-amz-version-id"] &&
                        (r.VersionId = e.headers["x-amz-version-id"]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-aws-kms-key-id"
                        ] &&
                        (r.SSEKMSKeyId =
                          e.headers[
                            "x-amz-server-side-encryption-aws-kms-key-id"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-bucket-key-enabled"
                        ] &&
                        (r.BucketKeyEnabled =
                          "true" ===
                          e.headers[
                            "x-amz-server-side-encryption-bucket-key-enabled"
                          ]),
                      void 0 !== e.headers["x-amz-request-charged"] &&
                        (r.RequestCharged = e.headers["x-amz-request-charged"]),
                      [4, ee(e.body, t)]);
                case 1:
                  return (
                    void 0 !== (i = o.sent()).Bucket && (r.Bucket = i.Bucket),
                    void 0 !== i.ETag && (r.ETag = i.ETag),
                    void 0 !== i.Key && (r.Key = i.Key),
                    void 0 !== i.Location && (r.Location = i.Location),
                    [2, Promise.resolve(r)]
                  );
              }
            });
          });
        },
        b = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c;
            return (0, o.Jh)(this, function (u) {
              switch (u.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (c = {}), [4, ee(e.body, t)];
                case 1:
                  return (
                    (r = o.pi.apply(
                      void 0,
                      i.concat([((c.body = u.sent()), c)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    (d = r.body),
                    (a = d.code || d.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, d), {
                      name: "" + a,
                      message: d.message || d.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (s = n.message || n.Message || a),
                    (n.message = s),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(s), n))]
                  );
              }
            });
          });
        },
        E = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return 200 !== e.statusCode && e.statusCode >= 300
                    ? [2, C(e, t)]
                    : ((r = {
                        $metadata: Y(e),
                        BucketKeyEnabled: void 0,
                        CopyObjectResult: void 0,
                        CopySourceVersionId: void 0,
                        Expiration: void 0,
                        RequestCharged: void 0,
                        SSECustomerAlgorithm: void 0,
                        SSECustomerKeyMD5: void 0,
                        SSEKMSEncryptionContext: void 0,
                        SSEKMSKeyId: void 0,
                        ServerSideEncryption: void 0,
                        VersionId: void 0,
                      }),
                      void 0 !== e.headers["x-amz-expiration"] &&
                        (r.Expiration = e.headers["x-amz-expiration"]),
                      void 0 !== e.headers["x-amz-copy-source-version-id"] &&
                        (r.CopySourceVersionId =
                          e.headers["x-amz-copy-source-version-id"]),
                      void 0 !== e.headers["x-amz-version-id"] &&
                        (r.VersionId = e.headers["x-amz-version-id"]),
                      void 0 !== e.headers["x-amz-server-side-encryption"] &&
                        (r.ServerSideEncryption =
                          e.headers["x-amz-server-side-encryption"]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-customer-algorithm"
                        ] &&
                        (r.SSECustomerAlgorithm =
                          e.headers[
                            "x-amz-server-side-encryption-customer-algorithm"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-customer-key-md5"
                        ] &&
                        (r.SSECustomerKeyMD5 =
                          e.headers[
                            "x-amz-server-side-encryption-customer-key-md5"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-aws-kms-key-id"
                        ] &&
                        (r.SSEKMSKeyId =
                          e.headers[
                            "x-amz-server-side-encryption-aws-kms-key-id"
                          ]),
                      void 0 !==
                        e.headers["x-amz-server-side-encryption-context"] &&
                        (r.SSEKMSEncryptionContext =
                          e.headers["x-amz-server-side-encryption-context"]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-bucket-key-enabled"
                        ] &&
                        (r.BucketKeyEnabled =
                          "true" ===
                          e.headers[
                            "x-amz-server-side-encryption-bucket-key-enabled"
                          ]),
                      void 0 !== e.headers["x-amz-request-charged"] &&
                        (r.RequestCharged = e.headers["x-amz-request-charged"]),
                      [4, ee(e.body, t)]);
                case 1:
                  return (
                    (i = o.sent()),
                    (r.CopyObjectResult = W(i, t)),
                    [2, Promise.resolve(r)]
                  );
              }
            });
          });
        },
        C = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c, u;
            return (0, o.Jh)(this, function (p) {
              switch (p.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (u = {}), [4, ee(e.body, t)];
                case 1:
                  switch (
                    ((r = o.pi.apply(
                      void 0,
                      i.concat([((u.body = p.sent()), u)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    a)
                  ) {
                    case "ObjectNotInActiveTierError":
                    case "com.amazonaws.s3#ObjectNotInActiveTierError":
                      return [3, 2];
                  }
                  return [3, 4];
                case 2:
                  return (d = [{}]), [4, U(r, t)];
                case 3:
                  return (
                    (n = o.pi.apply(void 0, [
                      o.pi.apply(void 0, d.concat([p.sent()])),
                      { name: a, $metadata: Y(e) },
                    ])),
                    [3, 5]
                  );
                case 4:
                  (s = r.body),
                    (a = s.code || s.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, s), {
                      name: "" + a,
                      message: s.message || s.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (p.label = 5);
                case 5:
                  return (
                    (c = n.message || n.Message || a),
                    (n.message = c),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(c), n))]
                  );
              }
            });
          });
        },
        k = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return 200 !== e.statusCode && e.statusCode >= 300
                    ? [2, z(e, t)]
                    : ((r = {
                        $metadata: Y(e),
                        AbortDate: void 0,
                        AbortRuleId: void 0,
                        Bucket: void 0,
                        BucketKeyEnabled: void 0,
                        Key: void 0,
                        RequestCharged: void 0,
                        SSECustomerAlgorithm: void 0,
                        SSECustomerKeyMD5: void 0,
                        SSEKMSEncryptionContext: void 0,
                        SSEKMSKeyId: void 0,
                        ServerSideEncryption: void 0,
                        UploadId: void 0,
                      }),
                      void 0 !== e.headers["x-amz-abort-date"] &&
                        (r.AbortDate = new Date(e.headers["x-amz-abort-date"])),
                      void 0 !== e.headers["x-amz-abort-rule-id"] &&
                        (r.AbortRuleId = e.headers["x-amz-abort-rule-id"]),
                      void 0 !== e.headers["x-amz-server-side-encryption"] &&
                        (r.ServerSideEncryption =
                          e.headers["x-amz-server-side-encryption"]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-customer-algorithm"
                        ] &&
                        (r.SSECustomerAlgorithm =
                          e.headers[
                            "x-amz-server-side-encryption-customer-algorithm"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-customer-key-md5"
                        ] &&
                        (r.SSECustomerKeyMD5 =
                          e.headers[
                            "x-amz-server-side-encryption-customer-key-md5"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-aws-kms-key-id"
                        ] &&
                        (r.SSEKMSKeyId =
                          e.headers[
                            "x-amz-server-side-encryption-aws-kms-key-id"
                          ]),
                      void 0 !==
                        e.headers["x-amz-server-side-encryption-context"] &&
                        (r.SSEKMSEncryptionContext =
                          e.headers["x-amz-server-side-encryption-context"]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-bucket-key-enabled"
                        ] &&
                        (r.BucketKeyEnabled =
                          "true" ===
                          e.headers[
                            "x-amz-server-side-encryption-bucket-key-enabled"
                          ]),
                      void 0 !== e.headers["x-amz-request-charged"] &&
                        (r.RequestCharged = e.headers["x-amz-request-charged"]),
                      [4, ee(e.body, t)]);
                case 1:
                  return (
                    void 0 !== (i = o.sent()).Bucket && (r.Bucket = i.Bucket),
                    void 0 !== i.Key && (r.Key = i.Key),
                    void 0 !== i.UploadId && (r.UploadId = i.UploadId),
                    [2, Promise.resolve(r)]
                  );
              }
            });
          });
        },
        z = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c;
            return (0, o.Jh)(this, function (u) {
              switch (u.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (c = {}), [4, ee(e.body, t)];
                case 1:
                  return (
                    (r = o.pi.apply(
                      void 0,
                      i.concat([((c.body = u.sent()), c)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    (d = r.body),
                    (a = d.code || d.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, d), {
                      name: "" + a,
                      message: d.message || d.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (s = n.message || n.Message || a),
                    (n.message = s),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(s), n))]
                  );
              }
            });
          });
        },
        w = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return 204 !== e.statusCode && e.statusCode >= 300
                    ? [2, K(e, t)]
                    : ((r = {
                        $metadata: Y(e),
                        DeleteMarker: void 0,
                        RequestCharged: void 0,
                        VersionId: void 0,
                      }),
                      void 0 !== e.headers["x-amz-delete-marker"] &&
                        (r.DeleteMarker =
                          "true" === e.headers["x-amz-delete-marker"]),
                      void 0 !== e.headers["x-amz-version-id"] &&
                        (r.VersionId = e.headers["x-amz-version-id"]),
                      void 0 !== e.headers["x-amz-request-charged"] &&
                        (r.RequestCharged = e.headers["x-amz-request-charged"]),
                      [4, Q(e.body, t)]);
                case 1:
                  return o.sent(), [2, Promise.resolve(r)];
              }
            });
          });
        },
        K = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c;
            return (0, o.Jh)(this, function (u) {
              switch (u.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (c = {}), [4, ee(e.body, t)];
                case 1:
                  return (
                    (r = o.pi.apply(
                      void 0,
                      i.concat([((c.body = u.sent()), c)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    (d = r.body),
                    (a = d.code || d.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, d), {
                      name: "" + a,
                      message: d.message || d.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (s = n.message || n.Message || a),
                    (n.message = s),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(s), n))]
                  );
              }
            });
          });
        },
        M = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i;
            return (0, o.Jh)(this, function (o) {
              return 200 !== e.statusCode && e.statusCode >= 300
                ? [2, T(e, t)]
                : ((r = {
                    $metadata: Y(e),
                    AcceptRanges: void 0,
                    Body: void 0,
                    BucketKeyEnabled: void 0,
                    CacheControl: void 0,
                    ContentDisposition: void 0,
                    ContentEncoding: void 0,
                    ContentLanguage: void 0,
                    ContentLength: void 0,
                    ContentRange: void 0,
                    ContentType: void 0,
                    DeleteMarker: void 0,
                    ETag: void 0,
                    Expiration: void 0,
                    Expires: void 0,
                    LastModified: void 0,
                    Metadata: void 0,
                    MissingMeta: void 0,
                    ObjectLockLegalHoldStatus: void 0,
                    ObjectLockMode: void 0,
                    ObjectLockRetainUntilDate: void 0,
                    PartsCount: void 0,
                    ReplicationStatus: void 0,
                    RequestCharged: void 0,
                    Restore: void 0,
                    SSECustomerAlgorithm: void 0,
                    SSECustomerKeyMD5: void 0,
                    SSEKMSKeyId: void 0,
                    ServerSideEncryption: void 0,
                    StorageClass: void 0,
                    TagCount: void 0,
                    VersionId: void 0,
                    WebsiteRedirectLocation: void 0,
                  }),
                  void 0 !== e.headers["x-amz-delete-marker"] &&
                    (r.DeleteMarker =
                      "true" === e.headers["x-amz-delete-marker"]),
                  void 0 !== e.headers["accept-ranges"] &&
                    (r.AcceptRanges = e.headers["accept-ranges"]),
                  void 0 !== e.headers["x-amz-expiration"] &&
                    (r.Expiration = e.headers["x-amz-expiration"]),
                  void 0 !== e.headers["x-amz-restore"] &&
                    (r.Restore = e.headers["x-amz-restore"]),
                  void 0 !== e.headers["last-modified"] &&
                    (r.LastModified = new Date(e.headers["last-modified"])),
                  void 0 !== e.headers["content-length"] &&
                    (r.ContentLength = parseInt(
                      e.headers["content-length"],
                      10
                    )),
                  void 0 !== e.headers.etag && (r.ETag = e.headers.etag),
                  void 0 !== e.headers["x-amz-missing-meta"] &&
                    (r.MissingMeta = parseInt(
                      e.headers["x-amz-missing-meta"],
                      10
                    )),
                  void 0 !== e.headers["x-amz-version-id"] &&
                    (r.VersionId = e.headers["x-amz-version-id"]),
                  void 0 !== e.headers["cache-control"] &&
                    (r.CacheControl = e.headers["cache-control"]),
                  void 0 !== e.headers["content-disposition"] &&
                    (r.ContentDisposition = e.headers["content-disposition"]),
                  void 0 !== e.headers["content-encoding"] &&
                    (r.ContentEncoding = e.headers["content-encoding"]),
                  void 0 !== e.headers["content-language"] &&
                    (r.ContentLanguage = e.headers["content-language"]),
                  void 0 !== e.headers["content-range"] &&
                    (r.ContentRange = e.headers["content-range"]),
                  void 0 !== e.headers["content-type"] &&
                    (r.ContentType = e.headers["content-type"]),
                  void 0 !== e.headers.expires &&
                    (r.Expires = new Date(e.headers.expires)),
                  void 0 !== e.headers["x-amz-website-redirect-location"] &&
                    (r.WebsiteRedirectLocation =
                      e.headers["x-amz-website-redirect-location"]),
                  void 0 !== e.headers["x-amz-server-side-encryption"] &&
                    (r.ServerSideEncryption =
                      e.headers["x-amz-server-side-encryption"]),
                  void 0 !==
                    e.headers[
                      "x-amz-server-side-encryption-customer-algorithm"
                    ] &&
                    (r.SSECustomerAlgorithm =
                      e.headers[
                        "x-amz-server-side-encryption-customer-algorithm"
                      ]),
                  void 0 !==
                    e.headers[
                      "x-amz-server-side-encryption-customer-key-md5"
                    ] &&
                    (r.SSECustomerKeyMD5 =
                      e.headers[
                        "x-amz-server-side-encryption-customer-key-md5"
                      ]),
                  void 0 !==
                    e.headers["x-amz-server-side-encryption-aws-kms-key-id"] &&
                    (r.SSEKMSKeyId =
                      e.headers["x-amz-server-side-encryption-aws-kms-key-id"]),
                  void 0 !==
                    e.headers[
                      "x-amz-server-side-encryption-bucket-key-enabled"
                    ] &&
                    (r.BucketKeyEnabled =
                      "true" ===
                      e.headers[
                        "x-amz-server-side-encryption-bucket-key-enabled"
                      ]),
                  void 0 !== e.headers["x-amz-storage-class"] &&
                    (r.StorageClass = e.headers["x-amz-storage-class"]),
                  void 0 !== e.headers["x-amz-request-charged"] &&
                    (r.RequestCharged = e.headers["x-amz-request-charged"]),
                  void 0 !== e.headers["x-amz-replication-status"] &&
                    (r.ReplicationStatus =
                      e.headers["x-amz-replication-status"]),
                  void 0 !== e.headers["x-amz-mp-parts-count"] &&
                    (r.PartsCount = parseInt(
                      e.headers["x-amz-mp-parts-count"],
                      10
                    )),
                  void 0 !== e.headers["x-amz-tagging-count"] &&
                    (r.TagCount = parseInt(
                      e.headers["x-amz-tagging-count"],
                      10
                    )),
                  void 0 !== e.headers["x-amz-object-lock-mode"] &&
                    (r.ObjectLockMode = e.headers["x-amz-object-lock-mode"]),
                  void 0 !== e.headers["x-amz-object-lock-retain-until-date"] &&
                    (r.ObjectLockRetainUntilDate = new Date(
                      e.headers["x-amz-object-lock-retain-until-date"]
                    )),
                  void 0 !== e.headers["x-amz-object-lock-legal-hold"] &&
                    (r.ObjectLockLegalHoldStatus =
                      e.headers["x-amz-object-lock-legal-hold"]),
                  Object.keys(e.headers).forEach(function (t) {
                    void 0 === r.Metadata && (r.Metadata = {}),
                      t.startsWith("x-amz-meta-") &&
                        (r.Metadata[t.substring(11)] = e.headers[t]);
                  }),
                  (i = e.body),
                  (r.Body = i),
                  [2, Promise.resolve(r)]);
            });
          });
        },
        T = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c, u, p;
            return (0, o.Jh)(this, function (m) {
              switch (m.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (p = {}), [4, ee(e.body, t)];
                case 1:
                  switch (
                    ((r = o.pi.apply(
                      void 0,
                      i.concat([((p.body = m.sent()), p)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    a)
                  ) {
                    case "InvalidObjectState":
                    case "com.amazonaws.s3#InvalidObjectState":
                      return [3, 2];
                    case "NoSuchKey":
                    case "com.amazonaws.s3#NoSuchKey":
                      return [3, 4];
                  }
                  return [3, 6];
                case 2:
                  return (d = [{}]), [4, L(r, t)];
                case 3:
                  return (
                    (n = o.pi.apply(void 0, [
                      o.pi.apply(void 0, d.concat([m.sent()])),
                      { name: a, $metadata: Y(e) },
                    ])),
                    [3, 7]
                  );
                case 4:
                  return (s = [{}]), [4, A(r, t)];
                case 5:
                  return (
                    (n = o.pi.apply(void 0, [
                      o.pi.apply(void 0, s.concat([m.sent()])),
                      { name: a, $metadata: Y(e) },
                    ])),
                    [3, 7]
                  );
                case 6:
                  (c = r.body),
                    (a = c.code || c.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, c), {
                      name: "" + a,
                      message: c.message || c.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (m.label = 7);
                case 7:
                  return (
                    (u = n.message || n.Message || a),
                    (n.message = u),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(u), n))]
                  );
              }
            });
          });
        },
        P = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return 200 !== e.statusCode && e.statusCode >= 300
                    ? [2, B(e, t)]
                    : ((r = {
                        $metadata: Y(e),
                        CommonPrefixes: void 0,
                        Contents: void 0,
                        ContinuationToken: void 0,
                        Delimiter: void 0,
                        EncodingType: void 0,
                        IsTruncated: void 0,
                        KeyCount: void 0,
                        MaxKeys: void 0,
                        Name: void 0,
                        NextContinuationToken: void 0,
                        Prefix: void 0,
                        StartAfter: void 0,
                      }),
                      [4, ee(e.body, t)]);
                case 1:
                  return (
                    "" === (i = o.sent()).CommonPrefixes &&
                      (r.CommonPrefixes = []),
                    void 0 !== i.CommonPrefixes &&
                      (r.CommonPrefixes = J((0, n.L)(i.CommonPrefixes), t)),
                    "" === i.Contents && (r.Contents = []),
                    void 0 !== i.Contents &&
                      (r.Contents = F((0, n.L)(i.Contents), t)),
                    void 0 !== i.ContinuationToken &&
                      (r.ContinuationToken = i.ContinuationToken),
                    void 0 !== i.Delimiter && (r.Delimiter = i.Delimiter),
                    void 0 !== i.EncodingType &&
                      (r.EncodingType = i.EncodingType),
                    void 0 !== i.IsTruncated &&
                      (r.IsTruncated = "true" == i.IsTruncated),
                    void 0 !== i.KeyCount &&
                      (r.KeyCount = parseInt(i.KeyCount)),
                    void 0 !== i.MaxKeys && (r.MaxKeys = parseInt(i.MaxKeys)),
                    void 0 !== i.Name && (r.Name = i.Name),
                    void 0 !== i.NextContinuationToken &&
                      (r.NextContinuationToken = i.NextContinuationToken),
                    void 0 !== i.Prefix && (r.Prefix = i.Prefix),
                    void 0 !== i.StartAfter && (r.StartAfter = i.StartAfter),
                    [2, Promise.resolve(r)]
                  );
              }
            });
          });
        },
        B = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c, u;
            return (0, o.Jh)(this, function (p) {
              switch (p.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (u = {}), [4, ee(e.body, t)];
                case 1:
                  switch (
                    ((r = o.pi.apply(
                      void 0,
                      i.concat([((u.body = p.sent()), u)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    a)
                  ) {
                    case "NoSuchBucket":
                    case "com.amazonaws.s3#NoSuchBucket":
                      return [3, 2];
                  }
                  return [3, 4];
                case 2:
                  return (d = [{}]), [4, q(r, t)];
                case 3:
                  return (
                    (n = o.pi.apply(void 0, [
                      o.pi.apply(void 0, d.concat([p.sent()])),
                      { name: a, $metadata: Y(e) },
                    ])),
                    [3, 5]
                  );
                case 4:
                  (s = r.body),
                    (a = s.code || s.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, s), {
                      name: "" + a,
                      message: s.message || s.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (p.label = 5);
                case 5:
                  return (
                    (c = n.message || n.Message || a),
                    (n.message = c),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(c), n))]
                  );
              }
            });
          });
        },
        I = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return 200 !== e.statusCode && e.statusCode >= 300
                    ? [2, j(e, t)]
                    : ((r = {
                        $metadata: Y(e),
                        AbortDate: void 0,
                        AbortRuleId: void 0,
                        Bucket: void 0,
                        Initiator: void 0,
                        IsTruncated: void 0,
                        Key: void 0,
                        MaxParts: void 0,
                        NextPartNumberMarker: void 0,
                        Owner: void 0,
                        PartNumberMarker: void 0,
                        Parts: void 0,
                        RequestCharged: void 0,
                        StorageClass: void 0,
                        UploadId: void 0,
                      }),
                      void 0 !== e.headers["x-amz-abort-date"] &&
                        (r.AbortDate = new Date(e.headers["x-amz-abort-date"])),
                      void 0 !== e.headers["x-amz-abort-rule-id"] &&
                        (r.AbortRuleId = e.headers["x-amz-abort-rule-id"]),
                      void 0 !== e.headers["x-amz-request-charged"] &&
                        (r.RequestCharged = e.headers["x-amz-request-charged"]),
                      [4, ee(e.body, t)]);
                case 1:
                  return (
                    void 0 !== (i = o.sent()).Bucket && (r.Bucket = i.Bucket),
                    void 0 !== i.Initiator && (r.Initiator = V(i.Initiator, t)),
                    void 0 !== i.IsTruncated &&
                      (r.IsTruncated = "true" == i.IsTruncated),
                    void 0 !== i.Key && (r.Key = i.Key),
                    void 0 !== i.MaxParts &&
                      (r.MaxParts = parseInt(i.MaxParts)),
                    void 0 !== i.NextPartNumberMarker &&
                      (r.NextPartNumberMarker = i.NextPartNumberMarker),
                    void 0 !== i.Owner && (r.Owner = _(i.Owner, t)),
                    void 0 !== i.PartNumberMarker &&
                      (r.PartNumberMarker = i.PartNumberMarker),
                    "" === i.Part && (r.Parts = []),
                    void 0 !== i.Part && (r.Parts = Z((0, n.L)(i.Part), t)),
                    void 0 !== i.StorageClass &&
                      (r.StorageClass = i.StorageClass),
                    void 0 !== i.UploadId && (r.UploadId = i.UploadId),
                    [2, Promise.resolve(r)]
                  );
              }
            });
          });
        },
        j = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c;
            return (0, o.Jh)(this, function (u) {
              switch (u.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (c = {}), [4, ee(e.body, t)];
                case 1:
                  return (
                    (r = o.pi.apply(
                      void 0,
                      i.concat([((c.body = u.sent()), c)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    (d = r.body),
                    (a = d.code || d.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, d), {
                      name: "" + a,
                      message: d.message || d.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (s = n.message || n.Message || a),
                    (n.message = s),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(s), n))]
                  );
              }
            });
          });
        },
        R = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return 200 !== e.statusCode && e.statusCode >= 300
                    ? [2, N(e, t)]
                    : ((r = {
                        $metadata: Y(e),
                        BucketKeyEnabled: void 0,
                        ETag: void 0,
                        Expiration: void 0,
                        RequestCharged: void 0,
                        SSECustomerAlgorithm: void 0,
                        SSECustomerKeyMD5: void 0,
                        SSEKMSEncryptionContext: void 0,
                        SSEKMSKeyId: void 0,
                        ServerSideEncryption: void 0,
                        VersionId: void 0,
                      }),
                      void 0 !== e.headers["x-amz-expiration"] &&
                        (r.Expiration = e.headers["x-amz-expiration"]),
                      void 0 !== e.headers.etag && (r.ETag = e.headers.etag),
                      void 0 !== e.headers["x-amz-server-side-encryption"] &&
                        (r.ServerSideEncryption =
                          e.headers["x-amz-server-side-encryption"]),
                      void 0 !== e.headers["x-amz-version-id"] &&
                        (r.VersionId = e.headers["x-amz-version-id"]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-customer-algorithm"
                        ] &&
                        (r.SSECustomerAlgorithm =
                          e.headers[
                            "x-amz-server-side-encryption-customer-algorithm"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-customer-key-md5"
                        ] &&
                        (r.SSECustomerKeyMD5 =
                          e.headers[
                            "x-amz-server-side-encryption-customer-key-md5"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-aws-kms-key-id"
                        ] &&
                        (r.SSEKMSKeyId =
                          e.headers[
                            "x-amz-server-side-encryption-aws-kms-key-id"
                          ]),
                      void 0 !==
                        e.headers["x-amz-server-side-encryption-context"] &&
                        (r.SSEKMSEncryptionContext =
                          e.headers["x-amz-server-side-encryption-context"]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-bucket-key-enabled"
                        ] &&
                        (r.BucketKeyEnabled =
                          "true" ===
                          e.headers[
                            "x-amz-server-side-encryption-bucket-key-enabled"
                          ]),
                      void 0 !== e.headers["x-amz-request-charged"] &&
                        (r.RequestCharged = e.headers["x-amz-request-charged"]),
                      [4, Q(e.body, t)]);
                case 1:
                  return o.sent(), [2, Promise.resolve(r)];
              }
            });
          });
        },
        N = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c;
            return (0, o.Jh)(this, function (u) {
              switch (u.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (c = {}), [4, ee(e.body, t)];
                case 1:
                  return (
                    (r = o.pi.apply(
                      void 0,
                      i.concat([((c.body = u.sent()), c)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    (d = r.body),
                    (a = d.code || d.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, d), {
                      name: "" + a,
                      message: d.message || d.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (s = n.message || n.Message || a),
                    (n.message = s),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(s), n))]
                  );
              }
            });
          });
        },
        O = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r;
            return (0, o.Jh)(this, function (o) {
              switch (o.label) {
                case 0:
                  return 200 !== e.statusCode && e.statusCode >= 300
                    ? [2, D(e, t)]
                    : ((r = {
                        $metadata: Y(e),
                        BucketKeyEnabled: void 0,
                        ETag: void 0,
                        RequestCharged: void 0,
                        SSECustomerAlgorithm: void 0,
                        SSECustomerKeyMD5: void 0,
                        SSEKMSKeyId: void 0,
                        ServerSideEncryption: void 0,
                      }),
                      void 0 !== e.headers["x-amz-server-side-encryption"] &&
                        (r.ServerSideEncryption =
                          e.headers["x-amz-server-side-encryption"]),
                      void 0 !== e.headers.etag && (r.ETag = e.headers.etag),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-customer-algorithm"
                        ] &&
                        (r.SSECustomerAlgorithm =
                          e.headers[
                            "x-amz-server-side-encryption-customer-algorithm"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-customer-key-md5"
                        ] &&
                        (r.SSECustomerKeyMD5 =
                          e.headers[
                            "x-amz-server-side-encryption-customer-key-md5"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-aws-kms-key-id"
                        ] &&
                        (r.SSEKMSKeyId =
                          e.headers[
                            "x-amz-server-side-encryption-aws-kms-key-id"
                          ]),
                      void 0 !==
                        e.headers[
                          "x-amz-server-side-encryption-bucket-key-enabled"
                        ] &&
                        (r.BucketKeyEnabled =
                          "true" ===
                          e.headers[
                            "x-amz-server-side-encryption-bucket-key-enabled"
                          ]),
                      void 0 !== e.headers["x-amz-request-charged"] &&
                        (r.RequestCharged = e.headers["x-amz-request-charged"]),
                      [4, Q(e.body, t)]);
                case 1:
                  return o.sent(), [2, Promise.resolve(r)];
              }
            });
          });
        },
        D = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var r, i, n, a, d, s, c;
            return (0, o.Jh)(this, function (u) {
              switch (u.label) {
                case 0:
                  return (i = [(0, o.pi)({}, e)]), (c = {}), [4, ee(e.body, t)];
                case 1:
                  return (
                    (r = o.pi.apply(
                      void 0,
                      i.concat([((c.body = u.sent()), c)])
                    )),
                    (a = "UnknownError"),
                    (a = te(e, r.body)),
                    (d = r.body),
                    (a = d.code || d.Code || a),
                    (n = (0, o.pi)((0, o.pi)({}, d), {
                      name: "" + a,
                      message: d.message || d.Message || a,
                      $fault: "client",
                      $metadata: Y(e),
                    })),
                    (s = n.message || n.Message || a),
                    (n.message = s),
                    delete n.Message,
                    [2, Promise.reject(Object.assign(new Error(s), n))]
                  );
              }
            });
          });
        },
        L = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t, r;
            return (0, o.Jh)(this, function (o) {
              return (
                (t = {
                  name: "InvalidObjectState",
                  $fault: "client",
                  $metadata: Y(e),
                  AccessTier: void 0,
                  StorageClass: void 0,
                }),
                void 0 !== (r = e.body).AccessTier &&
                  (t.AccessTier = r.AccessTier),
                void 0 !== r.StorageClass && (t.StorageClass = r.StorageClass),
                [2, t]
              );
            });
          });
        },
        q = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t;
            return (0, o.Jh)(this, function (r) {
              return (
                (t = {
                  name: "NoSuchBucket",
                  $fault: "client",
                  $metadata: Y(e),
                }),
                e.body,
                [2, t]
              );
            });
          });
        },
        A = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t;
            return (0, o.Jh)(this, function (r) {
              return (
                (t = { name: "NoSuchKey", $fault: "client", $metadata: Y(e) }),
                e.body,
                [2, t]
              );
            });
          });
        },
        G = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t;
            return (0, o.Jh)(this, function (r) {
              return (
                (t = {
                  name: "NoSuchUpload",
                  $fault: "client",
                  $metadata: Y(e),
                }),
                e.body,
                [2, t]
              );
            });
          });
        },
        U = function (e, t) {
          return (0, o.mG)(void 0, void 0, void 0, function () {
            var t;
            return (0, o.Jh)(this, function (r) {
              return (
                (t = {
                  name: "ObjectNotInActiveTierError",
                  $fault: "client",
                  $metadata: Y(e),
                }),
                e.body,
                [2, t]
              );
            });
          });
        },
        H = function (e, t) {
          var r = new a.o("CompletedMultipartUpload");
          void 0 !== e.Parts &&
            null !== e.Parts &&
            $(e.Parts, t).map(function (e) {
              (e = e.withName("Part")), r.addChildNode(e);
            });
          return r;
        },
        $ = function (e, t) {
          return e
            .filter(function (e) {
              return null != e;
            })
            .map(function (e) {
              if (null === e) return null;
              var t = (function (e, t) {
                var r = new a.o("CompletedPart");
                if (void 0 !== e.ETag && null !== e.ETag) {
                  var o = new a.o("ETag")
                    .addChildNode(new a.e(e.ETag))
                    .withName("ETag");
                  r.addChildNode(o);
                }
                void 0 !== e.PartNumber &&
                  null !== e.PartNumber &&
                  ((o = new a.o("PartNumber")
                    .addChildNode(new a.e(String(e.PartNumber)))
                    .withName("PartNumber")),
                  r.addChildNode(o));
                return r;
              })(e);
              return t.withName("member");
            });
        },
        J = function (e, t) {
          return (e || [])
            .filter(function (e) {
              return null != e;
            })
            .map(function (e) {
              return null === e
                ? null
                : (function (e, t) {
                    var r = { Prefix: void 0 };
                    return void 0 !== e.Prefix && (r.Prefix = e.Prefix), r;
                  })(e);
            });
        },
        W = function (e, t) {
          var r = { ETag: void 0, LastModified: void 0 };
          return (
            void 0 !== e.ETag && (r.ETag = e.ETag),
            void 0 !== e.LastModified &&
              (r.LastModified = new Date(e.LastModified)),
            r
          );
        },
        V = function (e, t) {
          var r = { ID: void 0, DisplayName: void 0 };
          return (
            void 0 !== e.ID && (r.ID = e.ID),
            void 0 !== e.DisplayName && (r.DisplayName = e.DisplayName),
            r
          );
        },
        F = function (e, t) {
          return (e || [])
            .filter(function (e) {
              return null != e;
            })
            .map(function (e) {
              return null === e
                ? null
                : (function (e, t) {
                    var r = {
                      Key: void 0,
                      LastModified: void 0,
                      ETag: void 0,
                      Size: void 0,
                      StorageClass: void 0,
                      Owner: void 0,
                    };
                    return (
                      void 0 !== e.Key && (r.Key = e.Key),
                      void 0 !== e.LastModified &&
                        (r.LastModified = new Date(e.LastModified)),
                      void 0 !== e.ETag && (r.ETag = e.ETag),
                      void 0 !== e.Size && (r.Size = parseInt(e.Size)),
                      void 0 !== e.StorageClass &&
                        (r.StorageClass = e.StorageClass),
                      void 0 !== e.Owner && (r.Owner = _(e.Owner, t)),
                      r
                    );
                  })(e, t);
            });
        },
        _ = function (e, t) {
          var r = { DisplayName: void 0, ID: void 0 };
          return (
            void 0 !== e.DisplayName && (r.DisplayName = e.DisplayName),
            void 0 !== e.ID && (r.ID = e.ID),
            r
          );
        },
        Z = function (e, t) {
          return (e || [])
            .filter(function (e) {
              return null != e;
            })
            .map(function (e) {
              return null === e
                ? null
                : (function (e, t) {
                    var r = {
                      PartNumber: void 0,
                      LastModified: void 0,
                      ETag: void 0,
                      Size: void 0,
                    };
                    return (
                      void 0 !== e.PartNumber &&
                        (r.PartNumber = parseInt(e.PartNumber)),
                      void 0 !== e.LastModified &&
                        (r.LastModified = new Date(e.LastModified)),
                      void 0 !== e.ETag && (r.ETag = e.ETag),
                      void 0 !== e.Size && (r.Size = parseInt(e.Size)),
                      r
                    );
                  })(e);
            });
        },
        Y = function (e) {
          var t;
          return {
            httpStatusCode: e.statusCode,
            requestId:
              null !== (t = e.headers["x-amzn-requestid"]) && void 0 !== t
                ? t
                : e.headers["x-amzn-request-id"],
            extendedRequestId: e.headers["x-amz-id-2"],
            cfId: e.headers["x-amz-cf-id"],
          };
        },
        Q = function (e, t) {
          return (
            void 0 === e && (e = new Uint8Array()),
            e instanceof Uint8Array
              ? Promise.resolve(e)
              : t.streamCollector(e) || Promise.resolve(new Uint8Array())
          );
        },
        X = function (e) {
          return !(
            null == e ||
            "" === e ||
            (Object.getOwnPropertyNames(e).includes("length") &&
              0 == e.length) ||
            (Object.getOwnPropertyNames(e).includes("size") && 0 == e.size)
          );
        },
        ee = function (e, t) {
          return (function (e, t) {
            return Q(e, t).then(function (e) {
              return t.utf8Encoder(e);
            });
          })(e, t).then(function (e) {
            if (e.length) {
              var t = (0, d.parse)(e, {
                  attributeNamePrefix: "",
                  ignoreAttributes: !1,
                  parseNodeValue: !1,
                  tagValueProcessor: function (e, t) {
                    return e
                      .replace(/&amp;/g, "&")
                      .replace(/&apos;/g, "'")
                      .replace(/&quot;/g, '"')
                      .replace(/&gt;/g, ">")
                      .replace(/&lt;/g, "<");
                  },
                }),
                r = "#text",
                o = Object.keys(t)[0],
                i = t[o];
              return i[r] && ((i[o] = i[r]), delete i[r]), (0, n.sT)(i);
            }
            return {};
          });
        },
        te = function (e, t) {
          return void 0 !== t.Code
            ? t.Code
            : 404 == e.statusCode
            ? "NotFound"
            : "";
        };
    },
  },
]);
//# sourceMappingURL=d6a9949e-4b25f9914cb12535bee7.js.map
