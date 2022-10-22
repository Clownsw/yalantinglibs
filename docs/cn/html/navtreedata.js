/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "yaLanTingLibs", "index.html", [
    [ "struct_pack简介", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html", [
      [ "基本用法", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md1", [
        [ "序列化", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md2", null ],
        [ "反序列化", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md3", null ],
        [ "部分反序列化", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md4", null ],
        [ "支持序列化所有的STL容器、自定义容器和optional", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md5", null ]
      ] ],
      [ "易用性比较", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md6", [
        [ "msgpack序列化/反序列化", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md7", null ],
        [ "protobuf序列化/反序列化", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md8", null ],
        [ "struct_pack序列化/反序列化", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md9", null ]
      ] ],
      [ "benchmark", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md10", [
        [ "测试原则", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md11", null ],
        [ "测试用例", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md12", null ],
        [ "测试对象", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md13", null ],
        [ "测试环境", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md14", null ],
        [ "benchmark result", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md15", null ],
        [ "序列化后buffer大小", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md16", null ]
      ] ],
      [ "兼容性", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md17", null ],
      [ "更多特色–部分反序列化", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md18", null ],
      [ "为什么struct_pack更快？", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md19", null ],
      [ "附录", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md20", [
        [ "测试代码", "md_src_struct_pack_doc_struct_pack_xEF_xBC_x9A_xE4_xB8_x80_xE4_xB8_xAA_xE6_x9B_xB4_xE5_xBF_xAB_x83e253aebb09b9e1265806b01b10561d.html#autotoc_md21", null ]
      ] ]
    ] ],
    [ "coro_rpc简介", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html", [
      [ "coro_rpc的易用性", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md23", [
        [ "rpc_server端", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md24", null ],
        [ "rpc函数支持任意参数", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md25", null ]
      ] ],
      [ "和grpc、brpc比较易用性", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md26", [
        [ "rpc易用性比较", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md27", null ],
        [ "异步编程模型比较", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md28", null ]
      ] ],
      [ "coro_rpc更多特色", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md29", [
        [ "同时支持实时任务和延时任务", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md30", null ],
        [ "服务端同时支持协程和异步回调", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md31", null ]
      ] ],
      [ "benchmark", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md32", [
        [ "测试环境", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md33", null ],
        [ "测试case", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md34", [
          [ "极限qps测试", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md35", null ],
          [ "ping-pong测试", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md36", null ],
          [ "长尾测试", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md37", null ]
        ] ],
        [ "benchmark备注", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md38", null ]
      ] ],
      [ "使用约束", "md_src_coro_rpc_doc__xE5_x9F_xBA_xE4_xBA_x8E_xE5_x8D_x8F_xE7_xA8_x8B_xE5_x92_x8C_xE7_xBC_x96_xE8f4f9a40070af04c0827b0bc7df70c003.html#autotoc_md39", null ]
    ] ],
    [ "模块", "modules.html", "modules" ],
    [ "类", "annotated.html", [
      [ "类列表", "annotated.html", "annotated_dup" ],
      [ "类索引", "classes.html", null ],
      [ "类成员", "functions.html", [
        [ "全部", "functions.html", null ],
        [ "函数", "functions_func.html", null ]
      ] ]
    ] ],
    [ "文件", "files.html", [
      [ "文件列表", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html"
];

var SYNCONMSG = '点击 关闭 面板同步';
var SYNCOFFMSG = '点击 开启 面板同步';