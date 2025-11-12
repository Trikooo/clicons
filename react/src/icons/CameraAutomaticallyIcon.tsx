import React from 'react';
import config from '../config';

interface CameraAutomaticallyIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CameraAutomaticallyIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/camera-automatically)
 * @see {@link https://clicons.dev/icon/camera-automatically} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CameraAutomaticallyIcon = React.forwardRef<SVGSVGElement, CameraAutomaticallyIconProps>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? 16;
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.8;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M12.6975 3.49998H11.303C10.5885 3.49998 10.2312 3.49998 9.91073 3.61198C9.71505 3.68038 9.53119 3.77877 9.36574 3.90365C9.0948 4.10815 8.89662 4.40543 8.50024 4.99998L8.50023 5C8.29723 5.30451 7.998 5.75335 7.87873 5.87869C7.5832 6.18926 7.19569 6.39665 6.77335 6.47027C6.6029 6.49998 6.41991 6.49998 6.05393 6.49998C5.07386 6.49998 4.58382 6.49998 4.18314 6.61341C3.1808 6.89714 2.3974 7.68054 2.11367 8.68288C2.00024 9.08356 2.00024 9.5736 2.00024 10.5537V14.5C2.00024 17.3284 2.00024 18.7426 2.87892 19.6213C3.7576 20.5 5.17182 20.5 8.00024 20.5H16.0002C18.8287 20.5 20.2429 20.5 21.1216 19.6213C22.0002 18.7426 22.0002 17.3284 22.0002 14.5V10.5537C22.0002 9.5736 22.0002 9.08356 21.8868 8.68288C21.6031 7.68054 20.8197 6.89714 19.8174 6.61341C19.4167 6.49998 18.9266 6.49998 17.9466 6.49998C17.5806 6.49998 17.3976 6.49998 17.2271 6.47027C16.8048 6.39665 16.4173 6.18926 16.1218 5.87869C16.0025 5.75335 15.7033 5.3045 15.5002 4.99998C15.1039 4.40543 14.9057 4.10815 14.6348 3.90365C14.4693 3.77877 14.2854 3.68038 14.0898 3.61198C13.7693 3.49998 13.412 3.49998 12.6975 3.49998Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M19.0002 9.49998V9.50998',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M15.0002 16.5L12.6684 9.97086C12.5676 9.68848 12.3001 9.49998 12.0002 9.49998C11.7004 9.49998 11.4329 9.68848 11.3321 9.97086L9.00024 16.5M10.5002 14H13.5002',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ]
];

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

CameraAutomaticallyIcon.displayName = 'CameraAutomaticallyIcon';
export default CameraAutomaticallyIcon;
