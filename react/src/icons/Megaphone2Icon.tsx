import React from 'react';
import config from '../config';

interface Megaphone2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Megaphone2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/megaphone2)
 * @see {@link https://clicons.dev/icon/megaphone2}
 */
const Megaphone2Icon = React.forwardRef<SVGSVGElement, Megaphone2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.9263 4.41103L8.27352 7.60452C7.76151 7.85029 7.21443 7.91187 6.65675 7.78693C6.29177 7.70517 6.10926 7.66429 5.9623 7.64751C4.13743 7.43912 3 8.88342 3 10.5443V11.4557C3 13.1166 4.13743 14.5609 5.9623 14.3525C6.10926 14.3357 6.29178 14.2948 6.65675 14.2131C7.21443 14.0881 7.76151 14.1497 8.27352 14.3955L14.9263 17.589C16.4534 18.3221 17.217 18.6886 18.0684 18.4029C18.9197 18.1172 19.2119 17.5041 19.7964 16.278C21.4012 12.9112 21.4012 9.08885 19.7964 5.72196C19.2119 4.49586 18.9197 3.88281 18.0684 3.5971C17.217 3.3114 16.4534 3.67794 14.9263 4.41103Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 17V17.5C13 18.7841 13 19.4261 12.776 19.7886C12.4773 20.2719 11.9312 20.545 11.3653 20.4939C10.9409 20.4557 10.4273 20.0704 9.4 19.3L8.2 18.4C7.22253 17.6669 7 17.2218 7 16V14.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 14V8'
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

Megaphone2Icon.displayName = 'Megaphone2Icon';
export default Megaphone2Icon;
