<template>
  <div class="card">
    <div class="card-header"></div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
          <div class="media-content mt-2  ">
            <p class="title is-4">Demo App 2</p>
            <span
              class="tag has-background-primary has-text-white is-light mt-2 p-3"
              >#WebApp</span
            >
          </div>
        </div>
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          culpa.
        </p>
      </div>
      <div class="columns is-mobile is-paddingless">
        <div class="column">
          <div class="heart-btn">
            <i class="far fa-heart"></i>
          </div>
        </div>
        <div class="column"></div>
        <div class="column">
          <button
            class="button readmore-btn  is-link is-outlined has-text-white"
          >
            Read More <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feed2",
};
</script>

<style lang="scss">
.card .media:not(:last-child) {
  margin-bottom: 0.8rem;
}
.card {
  max-width: 22rem;
}
.card .content p {
  color: #a2a5b9;
  letter-spacing: 1px;
}
.card-header {
  width: 100%;
  min-height: 4.5rem;
  background-image: linear-gradient(to right, #d36bca, 60%, #1282eb);
}
.heart-btn {
  font-size: 1.5rem;
  cursor: pointer;
}
.readmore-btn {
  font-size: 0.8rem;
  font-weight: 500;
}
img {
  border-radius: 8px;
}
.title {
  color: #fafafa;
  margin-bottom: 0.4rem;
}
.image {
  margin-top: -48px;
}
</style>
