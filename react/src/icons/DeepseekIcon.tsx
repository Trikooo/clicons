import React from 'react';
import config from '../config';

interface DeepseekIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DeepseekIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/deepseek)
 * @see {@link https://clicons.dev/icon/deepseek}
 */
const DeepseekIcon = React.forwardRef<SVGSVGElement, DeepseekIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.7251 6.16595C19.5974 6.16595 18.9538 6.95202 18.9538 6.95202C18.7384 5.92858 18.095 5.6278 17.3608 5.28691C16.8965 5.07135 16.702 4.59085 16.6387 4.2437C16.6146 4.11149 16.5055 4.00308 16.3711 4.00308C16.237 4.00308 16.1093 4.05921 16.0445 4.17662C15.9059 4.42748 15.6911 4.97621 15.672 5.98711C15.6435 7.48962 16.8825 8.64855 17.5056 9.04019C17.4415 9.41048 17.216 9.98242 17.1112 10.2221C16.7962 10.1096 15.9376 9.74732 15.2402 8.98763C14.2834 7.94536 13.5027 7.20684 12.4854 6.4845C11.4681 5.76216 12.1483 4.90154 12.5757 4.69688C13.003 4.49221 12.678 4.28196 11.6125 4.31808C10.7602 4.34697 9.54607 4.84808 9.04556 5.09502C8.53523 4.93292 7.47442 4.90065 7.00781 4.90478C2.42529 4.90478 1.0006 8.98014 1.0006 11.0006C1.0006 17.0868 5.87378 20.0006 9.37378 20.0006C13.3324 20.0006 14.7193 18.3865 14.7193 18.3865C14.8826 18.4882 15.4787 18.7032 16.5574 18.749C17.9058 18.8062 18.4082 18.4246 18.4464 18.1321C18.4845 17.8395 18.2683 17.7314 18.0775 17.6423C17.8867 17.5533 17.5878 17.3816 17.0217 17.1971C16.5689 17.0496 16.3652 16.889 16.3199 16.8272C19.0501 14.3553 19.5503 10.8921 19.473 9.4203C21.5848 9.33823 22.4164 7.93216 22.69 7.22092C22.9696 6.49381 23.1441 5.50412 22.8541 5.27981C22.6221 5.10036 22.4281 5.31649 22.3601 5.44699C21.9885 5.84344 21.7159 6.16595 20.7251 6.16595Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9998 10.5684C11.9998 10.5684 12.8758 10.2982 13.6446 10.823C14.6861 11.5338 14.9998 12.4988 14.9998 12.4988'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 16.4987C13.5 16.4987 12.4587 15.9918 10.8957 13.9604C9.01764 11.5195 7.24874 8.88553 3.52946 9.7468C3.52946 9.7468 3.50016 14.9979 8.50002 16.4987'
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

DeepseekIcon.displayName = 'DeepseekIcon';
export default DeepseekIcon;
