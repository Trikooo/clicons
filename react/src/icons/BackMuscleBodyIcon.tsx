import React from 'react';
import config from '../config';

interface BackMuscleBodyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BackMuscleBodyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/back-muscle-body)
 * @see {@link https://clicons.dev/icon/back-muscle-body}
 */
const BackMuscleBodyIcon = React.forwardRef<SVGSVGElement, BackMuscleBodyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.5 10C14.6716 10 14 9.32843 14 8.5M8.5 10C9.32843 10 10 9.32843 10 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 2V2.64298C14 3.22979 14 3.52319 14.0654 3.77255C14.223 4.37391 14.6513 4.86778 15.2244 5.10888C15.462 5.20885 15.7524 5.25035 16.3333 5.33333C17.4952 5.49931 18.0761 5.5823 18.5513 5.78224C19.6973 6.26445 20.554 7.25217 20.8693 8.4549C21 8.95361 21 9.54043 21 10.714V22'
    }
  ],
  [
    'path',
    {
      d: 'M10 2V2.64298C10 3.22979 10 3.52319 9.93463 3.77255C9.77699 4.37391 9.34867 4.86778 8.77564 5.10888C8.53804 5.20885 8.24758 5.25035 7.66667 5.33333C6.50484 5.49931 5.92393 5.5823 5.44871 5.78224C4.30266 6.26445 3.44601 7.25217 3.13073 8.4549C3 8.95361 3 9.54043 3 10.714V22'
    }
  ],
  [
    'path',
    {
      d: 'M12 13V22'
    }
  ],
  [
    'path',
    {
      d: 'M18 11.5C18 11.5 17.4549 14.3636 17.503 17.2273C17.535 19.1271 18 22 18 22'
    }
  ],
  [
    'path',
    {
      d: 'M6 11.5C6 11.5 6.54513 14.3636 6.49699 17.2273C6.46505 19.1271 6 22 6 22'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

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
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

BackMuscleBodyIcon.displayName = 'BackMuscleBodyIcon';
export default BackMuscleBodyIcon;
