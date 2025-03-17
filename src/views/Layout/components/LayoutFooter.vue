<template>
  <footer class="fs-footer">
    <div class="container">
      <!-- fs-service-list -->
      <ul class="fs-footer-service">
        <li class="fs-footer-service-item">
          <a href="javascript:void(0);">
            <img src="" alt=""><span>20年品牌</span>
          </a>
        </li>
        <li class="fs-footer-service-item">
          <a href="javascript:void(0);">
            <img src="" alt=""><span>1-3小时配送</span>
          </a>
        </li>
        <li class="fs-footer-service-item">
          <a href="javascript:void(0);">
            <img src="" alt=""><span>訂單實拍</span>
          </a>
        </li>
        <li class="fs-footer-service-item">
          <a href="javascript:void(0);">
            <img src="" alt=""><span>200%退赔承诺</span>
          </a>
        </li>
        <li class="fs-footer-service-item">
          <a href="javascript:void(0);">
            <img src="" alt=""><span>銷量領先</span>
          </a>
        </li>
        <li class="fs-footer-service-item">
          <a href="javascript:void(0);">
            <img src="" alt=""><span>百萬客戶信賴</span>
          </a>
        </li>
        <li class="fs-footer-service-item">
          <a href="javascript:void(0);">
            <img src="" alt=""><span>低價保障</span>
          </a>
        </li>
        <li class="fs-footer-service-item">
          <a href="javascript:void(0);">
            <img src="" alt=""><span>時尚原創花藝</span>
          </a>
        </li>
      </ul>
      <!-- fs-help -->
      <div></div>
    </div>
  </footer>
</template>

<style scoped lang='scss'>
.fs-footer {
  background-color: #f5f5f5;
  padding-top: 20px;
  border: 1px solid red;
  margin-top: 20px;

  .fs-footer-service {
    display: grid;
    grid-template-columns: repeat(auto-fill, 25%);
    gap: 20px 0;

    padding: 20px 0;
    border-bottom: 1px solid #E9ECF0;


    .fs-footer-service-item {
      font-size: 1.6rem;
      line-height: 2.4rem;
      letter-spacing: 0.08em;

      a {
        display: flex;
        align-items: center;

        img {
          width: 40px;
          height: 40px;
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
