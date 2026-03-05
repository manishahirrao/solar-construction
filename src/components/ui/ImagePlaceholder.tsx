interface ImagePlaceholderProps {
  description: string
  width?: number
  height?: number
  variant?: 'hero' | 'thumbnail' | 'gallery' | 'icon'
  className?: string
}

export default function ImagePlaceholder({
  description,
  width,
  height,
  variant = 'thumbnail',
  className = '',
}: ImagePlaceholderProps) {
  const baseClasses = 'image-placeholder flex items-center justify-center text-center p-4'
  
  const variantClasses = {
    hero: 'image-placeholder hero min-h-96 text-lg font-semibold',
    thumbnail: 'image-placeholder thumbnail h-48 text-sm',
    gallery: 'image-placeholder gallery h-64 text-base',
    icon: 'image-placeholder icon h-16 w-16 text-xs font-medium',
  }

  const style = {
    ...(width && { width: `${width}px` }),
    ...(height && { height: `${height}px` }),
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      role="img"
      aria-label={`Image placeholder: ${description}`}
    >
      <div className="text-center">
        <div className="text-2xl mb-2">🖼️</div>
        <div className="font-medium text-gray-600">
          {description}
        </div>
        {variant === 'hero' && (
          <div className="text-xs text-gray-400 mt-2">
            Image will be added here
          </div>
        )}
      </div>
    </div>
  )
}