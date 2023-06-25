<template>
  <Row>
    <Carousel />
  </Row>
  <Row container-class="flex-grow-1 mb-3">
    <Sidebar css-classes="order-1 order-md-first">
      <blocks-top />
      <blocks-last />
    </Sidebar>
    <Chat />
    <Sidebar css-classes="order-2">
      <blocks-requests />
      <blocks-artist />
    </Sidebar>
  </Row>
  <Row>
    <Requests />
  </Row>
</template>
