/*! Qoopido.js library 3.6.7, 2015-07-08 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(o){window.qoopido.register("pool/array",o,["../pool"])}(function(o,n,r,t,e,i,p){"use strict";var u=o.pool.extend({_dispose:function(o){return o.length=0,o},_obtain:function(){return[]}});return n.pool=n.pool||{},n.pool.array=u.create(),u});