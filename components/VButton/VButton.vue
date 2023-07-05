<template>
  <button
    ref="el"
    :class="[
      defaultTypes[type] ? defaultTypes[type] : type,
      {
        'text-sm h-8' : size === 'small',
        'text-min h-6' : size === 'mini',
        'text-base h-10' : size === 'medium',
        'text-lg h-12' : size === 'large',
        'text-xl h-14' : size === 'xl',
        'h-full w-full': size === 'full',
      },
      {
        'w-full justify-center': fullWidth,
        'rounded-full': circle,
        'rounded-0': square,
        'rounded-l': !circle && !square && !buttonLeft,
        'rounded-r': !circle && !square && !buttonRight,
        'shadow': shadow,
        'justify-center': !$slots.default,
        'w-14': !$slots.default && size === 'xl',
        'w-12': !$slots.default && size === 'large',
        'w-10': !$slots.default && size === 'medium',
        'w-8': !$slots.default && size === 'small',
        'w-6': !$slots.default && size === 'mini',
        'cursor-not-allowed': disabled,
        'cursor-default pointer-events-none': !clickable,
        'whitespace-nowrap': size !== 'full',
      },
      border? 'border border-gray-300': '',

    ]"
    :disabled="disabled"
    :style="{
      paddingLeft: padding + 'em',
      paddingRight: padding + 'em',
    }"
    class="v-button  relative select-none duration-100 pointer-events-auto
           focus:outline-none active:outline-none inline-flex items-center leading-none"
    style="-webkit-tap-highlight-color: transparent;"
    @click="handleClick"
  >
    <VIcon
      v-if="loading"
      :class="[{'mr-1 -ml-1': $slots.default}]"
      class="animate-spin"
      name="ui-loading-01"
    />
    <VIcon
      v-if="icon && !loading"
      :class="[{'mr-1 -ml-1': $slots.default}]"
      :name="icon"
    />
    <slot v-if="$slots.default"/>
    <VIcon
      v-if="suffixIcon && !loading"
      :class="[{'ml-1 -mr-1': $slots.default}]"
      :name="suffixIcon"
    />

    <span
      v-if="disabled"
      :class="{
        'rounded-full': circle,
        'rounded-0': square,
        'rounded-l': !circle && !square && !buttonLeft,
        'rounded-r': !circle && !square && !buttonRight,
      }"
      class="absolute inset-0 opacity-40 bg-white"
    />
    <span
      v-if="active"
      class="absolute left-1 top-1 rounded-full bg-blue-500"
      style="width: 6px; height: 6px;"
    />
  </button>
</template>
<script lang="ts"
        setup>
import ClipboardJs from 'clipboard'
import Tippy from 'tippy.js'
import 'tippy.js/themes/light.css'
const paddingMap: Record<string, number> = {
  xl: 6 / 4,
  large: 5 / 4,
  medium: 1,
  small: 3.5 / 4,
  mini: 3 / 4,
}
const spacingPadding: Record<string, number> = {
  xl: 2 / 4,
  lg: 1 / 4,
  sm: -1 / 4,
  xs: -2 / 4,
}

const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  suffixIcon: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'purple',
  },
  size: {
    type: String,
    default: 'medium',
  },
  border: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: '',
  },
  spacing: {
    type: String,
    default: 'base',
  },
  title: {
    type: String,
    default: '',
  },
  lineBottom: Boolean,
  lineTop: Boolean,
  circle: Boolean,
  square: Boolean,
  center: Boolean,
  disabled: Boolean,
  shadow: Boolean,
  active: Boolean,
  fullWidth: Boolean,
  clickable: { // 是否可点击
    type: Boolean,
    default: true,
  },
  buttonLeft: {
    type: Boolean,
    default: false,
  },
  buttonRight: {
    type: Boolean,
    default: false,
  },
  onCopy: {
    type: Function,
    required: false,
  },
  onCopySuccess: {
    type: Function,
    required: false,
  },
})

const defaultTypes: Record<string, string> = {
  'blue': 'text-white bg-blue-500 hover:bg-blue-600',
  'purple': 'text-white bg-purple-500 hover:bg-purple-700',
  'red': 'text-white bg-red-500 hover:bg-red-600',
  'green': 'text-white bg-green-500 hover:bg-green-600',
  'orange': 'text-white bg-orange-500 hover:bg-orange-600',
  'white': 'text-gray-800 bg-white hover:bg-gray-200',
  'gray': 'text-gray-800 bg-gray-100 hover:bg-gray-300',
  'trans': 'bg-transparent hover:bg-white',
  'link': 'text-purple-900 hover:text-purple-500',
  'black': 'text-white bg-gray-800 hover:bg-gray-700',
  'dark': 'text-white bg-gray-600 hover:bg-gray-500 hover:text-white',
  'dark-blue': 'text-gray-300 bg-gray-700 hover:bg-blue-400 hover:text-white',
  'gradient-blue': 'text-white bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600',
}

const emits = defineEmits(['click', 'copy-success'])

const router = useRouter()

const el = ref()
const slots = useSlots()

const padding = computed(() => {
  let padding = 0
  if (slots.default) {
    padding = (paddingMap[props.size] || 0) + (spacingPadding[props.spacing] || 0)
  }
  if (!padding) {
    return ''
  }
  return padding
})

function handleClick(e: MouseEvent) {
  if (props.disabled || props.loading) {
    e.stopPropagation()
    return
  }
  if (props.to) {
    router.push(props.to)
    e.stopPropagation()
    e.preventDefault()
  } else {
    emits('click', e)
  }
}

onMounted(() => {
  if (props.onCopy) {
    new ClipboardJs(el.value, {
      text: () => {
        return props.onCopy!()
      },
    }).on('success', () => {
      emits('copy-success')
    })
  }
  if (props.title) {
    Tippy(el.value, {
      content: props.title,
      theme: 'panel dark popup',
      delay: [300, 0],
    })
  }
})
</script>
<style>
.v-button {
    outline: none !important;
}
</style>
