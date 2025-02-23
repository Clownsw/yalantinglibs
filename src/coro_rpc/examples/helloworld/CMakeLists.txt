set(CMAKE_INCLUDE_CURRENT_DIR ON)
#########################################################################################
# Example: Use coro_rpc with CMake target libcoro_rpc
# After CMake 3.15, all dependencies handled automatically when linking CMake target
# No other code needed
#########################################################################################
add_executable(helloworld_server
        server/main.cpp
        server/rpc_service.cpp
        )
target_link_libraries(helloworld_server PRIVATE libcoro_rpc)
add_executable(helloworld_client client/main.cpp)
target_link_libraries(helloworld_client PRIVATE libcoro_rpc)

#########################################################################################
# Example: Use coro_rpc without CMake target libcoro_rpc
# You must
#     - define macro ASIO_HAS_STD_INVOKE_RESULT and ASYNC_SIMPLE_HAS_NOT_AIO manually
#     - include coro_rpc folder if needed
#     - include coro_rpc dependencies folders (asio, async_simple, spdlog)
#     - link pthread
#########################################################################################
add_executable(helloworld_server_manually
        server/main.cpp
        server/rpc_service.cpp
        )
add_executable(helloworld_client_manually client/main.cpp)
target_compile_definitions(helloworld_server_manually PRIVATE ASIO_HAS_STD_INVOKE_RESULT)
target_compile_definitions(helloworld_server_manually PRIVATE ASYNC_SIMPLE_HAS_NOT_AIO)
target_compile_definitions(helloworld_client_manually PRIVATE ASIO_HAS_STD_INVOKE_RESULT)
target_compile_definitions(helloworld_client_manually PRIVATE ASYNC_SIMPLE_HAS_NOT_AIO)
target_include_directories(helloworld_server_manually PRIVATE
        ${CMAKE_SOURCE_DIR}/thirdparty/asio
        ${CMAKE_SOURCE_DIR}/thirdparty/async_simple
        ${CMAKE_SOURCE_DIR}/thirdparty/spdlog
)
target_include_directories(helloworld_client_manually PRIVATE
        ${CMAKE_SOURCE_DIR}/thirdparty/asio
        ${CMAKE_SOURCE_DIR}/thirdparty/async_simple
        ${CMAKE_SOURCE_DIR}/thirdparty/spdlog
)
target_link_libraries(helloworld_server_manually -lpthread)
target_link_libraries(helloworld_client_manually -lpthread)
# workaround
if (CMAKE_CXX_COMPILER_ID STREQUAL "Clang")
    # When using coro_rpc_client, only remote function declarations are required.
    # Generally speaking, RPC function declaration and definition are divided.
    # However, clang + ld(gold linker) + '-g' will report 'undefined reference to xxx'.
    # We force use lld when compiler is clang.
    # Note: gcc + ld + '-g' or clang + lld + '-g' work well
    target_link_options(helloworld_server_manually PRIVATE "-fuse-ld=lld")
    target_link_options(helloworld_client_manually PRIVATE "-fuse-ld=lld")
    message(STATUS "Force add link option: -fuse-ld=lld")
endif ()