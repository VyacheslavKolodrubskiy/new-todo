// Form
import AuthForm from "@/components/form/AuthForm.vue";
import TaskForm from "@/components/form/TaskForm.vue";
import LabelForm from "@/components/form/LabelForm.vue";
import TitleEditForm from "@/components/form/TitleEditForm.vue";
// UI
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseIcon from "@/components/UI/BaseIcon.vue";
import BaseModal from "@/components/UI/BaseModal.vue";
import BaseButtonAdd from "@/components/UI/BaseButtonAdd.vue";
import BaseButtonRemove from "@/components/UI/BaseButtonRemove.vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import BaseSelect from "@/components/UI/BaseSelect.vue";
import BaseTextArea from "@/components/UI/BaseTextArea.vue";
import BaseToast from "@/components/UI/BaseToast.vue";
// List-item
import TaskListItem from "@/components/TaskListItem.vue";
import LabelListItem from "@/components/LabelListItem.vue";
import ArchiveListItem from "@/components/ArchiveListItem.vue";
import TaskListItemSubmenu from "@/components/TaskListItemSubmenu.vue";
// List
import TheTaskList from "@/components/TheTaskList.vue";
import TheLabelList from "@/components/TheLabelList.vue";
import TheArchiveList from "@/components/TheArchiveList.vue";
// Subheader
import TheLabelSubheader from "@/components/TheLabelSubheader.vue";
import TheTaskSubheader from "@/components/TheTaskSubheader.vue";
import TheArchiveSubheader from "@/components/TheArchiveSubheader.vue";

import TheHeader from "@/components/TheHeader.vue";
import TheSearch from "@/components/TheSearch.vue";

const components = [
  TitleEditForm,
  AuthForm,
  LabelForm,
  TaskForm,
  TheHeader,
  TheLabelSubheader,
  BaseButtonAdd,
  BaseToast,
  BaseModal,
  BaseIcon,
  BaseButton,
  BaseInput,
  BaseSelect,
  BaseTextArea,
  BaseButtonRemove,
  TaskListItemSubmenu,
  TheLabelList,
  LabelListItem,
  TheTaskList,
  TaskListItem,
  TheTaskSubheader,
  TheArchiveSubheader,
  TheSearch,
  TheArchiveList,
  ArchiveListItem,
];

export default components;
