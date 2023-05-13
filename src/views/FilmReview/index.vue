<template>
  <div class="auction-management">
    <a-tabs v-model:activeKey="activeKey" @change="changeTab">
      <a-tab-pane v-for="v in tabs" :key="v.value" :tab="v.label"></a-tab-pane>
    </a-tabs>
  </div>
  <a-table
    :columns="table.columns"
    :data-source="table.list"
    :loading="table.isLoading"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <a v-if="activeKey === 'noAudit'" @click="handleFilmDetail(record)">
          审核
        </a>
        <a v-if="activeKey === 'inAudit'" @click="handleFilmReject(record)">
          驳回
        </a>
      </template>
    </template>
  </a-table>

  <a-modal
    v-model:visible="filmVisible"
    width="980px"
    title="影片审核"
    ok-text="确认"
    cancel-text="取消"
    @ok="handleConfirmAudit"
  >
    <vue3VideoPlay
      v-bind="videoOptions"
      poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg"
    />
    <div class="mt-lg">
      <a-form ref="formRef" :model="form" :rules="formRules">
        <a-form-item
          name="auditText"
          :rules="[{ required: true, message: '审核意见不能为空' }]"
        >
          <a-textarea
            v-model:value="form.auditText"
            placeholder="请输入审核意见"
            show-count
            :maxlength="200"
            :auto-size="{ minRows: 3, maxRows: 5 }"
          />
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
import { FilmReviewTable, FilmReviewList, Options } from "./index.type";
import type { Rule, FormInstance } from "ant-design-vue/lib/form";
// tabs列表
const tabs = ref<Options[]>([
  { label: "待审核", value: "noAudit" },
  { label: "已审核", value: "inAudit" },
]);
// 当前激活tab
const activeKey = ref<string>("noAudit");
// 表单句柄
const formRef = ref<FormInstance>();
// 表单
const form = reactive<{ auditText: string }>({ auditText: "" });
// 表单规则
const formRules = reactive<{ [key: string]: Rule[] }>({
  auditText: [{ required: true, message: "审核意见不能为空", trigger: "blur" }],
});
// 显示影片
const filmVisible = ref<boolean>(false);
// 视频配置
const videoOptions = reactive({
  width: "100%",
  height: "450px",
  color: "#409eff",
  title: "", //视频名称
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: true, //循环播放
  mirror: false, //镜像画面
  ligthOff: true, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
// 表格数据
const table = reactive<FilmReviewTable>({
  columns: [
    {
      title: "影片名称",
      key: "filmName",
      dataIndex: "filmName",
      ellipsis: true,
    },
    {
      title: "上传日期",
      key: "uploadDate",
      dataIndex: "uploadDate",
    },
    {
      title: "上传作者",
      key: "uploadAuthor",
      dataIndex: "uploadAuthor",
    },
    {
      title: "审核人",
      key: "auditName",
      dataIndex: "auditName",
    },
    {
      title: "操作",
      key: "action",
      dataIndex: "action",
      width: 80,
    },
  ],
  list: [
    {
      key: "1",
      filmName: "竞拍测试视频一",
      uploadDate: "2022-12-12 12:12:12",
      uploadAuthor: "admin",
      auditName: "admin",
    },
    {
      key: "1",
      filmName: "竞拍测试视频二",
      uploadDate: "2023-11-11 00:00:00",
      uploadAuthor: "admin",
      auditName: "admin",
    },
    {
      key: "1",
      filmName: "竞拍测试视频三",
      uploadDate: "2024-10-12 02:1=02:12",
      uploadAuthor: "fangwei",
      auditName: "admin",
    },
  ],
  isLoading: false,
});

// 切换tab
const changeTab = (): void => {
  table.isLoading = false;
};

// 影片详情
const handleFilmDetail = (row: FilmReviewList): void => {
  console.log(row);
  filmVisible.value = true;
  formRef.value.resetFields();
};

// 影片驳回
const handleFilmReject = (row: FilmReviewList): void => {
  console.log(row);
};

// 确认审核影片
const handleConfirmAudit = (): void => {
  formRef.value.validateFields().then(async () => {
    filmVisible.value = false;
  });
};
</script>
