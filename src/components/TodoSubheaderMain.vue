<template>
  <div
    class="bg-gradient-to-tr from-indigo-500 to-purple-500 h-44 rounded-b-3xl p-4 shadow-2xl"
  >
    <div class="flex justify-between">
      <div>
        <div class="text-white mb-2 text-2xl">
          <b>{{ getDate.day }}, </b>
          <small>{{ getDate.date }} </small>
        </div>
        <span class="text-white text-lg">{{ getDate.months }}, </span>
        <span class="text-white">{{ getDate.year }} год</span>
      </div>
      <div class="text-white text-lg self-end">
        Количество задач - {{ todosLength }}
      </div>
    </div>
    <div class="mt-5 flex justify-between">
      <BaseButtonAdd
        :class="{ 'animate-bounce': !isFormOpen }"
        @click="openModal"
      />
      <BaseButtonRemove @click="onRemove" />
    </div>

    <TaskForm v-model="isFormOpen" />
    <BaseToast v-if="isOpenToast" label="Все задачи были удалены" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TodoSubheaderMain",
  data() {
    return {
      isFormOpen: false,
      isOpenToast: false,
      days: [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ],
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    };
  },
  computed: {
    ...mapGetters({
      todosLength: "todos/getAllTodosLength",
    }),
    getDate() {
      return {
        day: this.days[new Date().getDay()],
        months: this.months[new Date().getMonth()],
        date: new Date().getDate(),
        year: new Date().getFullYear(),
      };
    },
  },
  methods: {
    ...mapMutations("todos", ["REMOVE_ALL_TASKS"]),
    openModal() {
      this.isFormOpen = true;
    },
    openToast() {
      this.isOpenToast = true;
      setTimeout(() => (this.isOpenToast = false), 2000);
    },
    onRemove() {
      this.REMOVE_ALL_TASKS();
      this.openToast();
    },
  },
};
</script>
